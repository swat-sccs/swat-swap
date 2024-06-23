"use server";

import { ListingCategories, createListingFormDataSchema } from "@/dtos/listing";
import { revalidatePath } from "next/cache";
import prisma from "@/prisma/prisma";
import {
  createBucketIfNotExists,
  uploadFileToListingImagesBucket,
} from "@/minio/actions";
import { listingImagesBucketName } from "@/config";

const validateFormDataField = (formData: FormData, field: string) => {
  if (!formData.has(field) && formData.get(field)) {
    throw new Error(`Missing required field: ${field}`);
  }
};

const presenceCheckBaseFields = (formData: FormData) => {
  const baseRequiredFields = [
    "title",
    "description",
    "type",
    "category",
    "condition",
  ];

  for (const field of baseRequiredFields) {
    if (!formData.has(field)) {
      console.error(`Missing required field: ${field}`);
      throw new Error(`Missing required field: ${field}`);
    }
  }
};

const uploadImageFile = async (imageFile: File) => {
  const imageBuffer = await imageFile.arrayBuffer();

  const digest = await crypto.subtle.digest("SHA-256", imageBuffer);
  const digestBytes = new Uint8Array(digest);

  await uploadFileToListingImagesBucket(imageFile, listingImagesBucketName);

  const checksum = btoa(
    digestBytes.reduce((acc, byte) => acc + String.fromCharCode(byte), "")
  );

  return {
    bucketName: listingImagesBucketName,
    checksum: checksum,
    fileName: imageFile.name,
  };
};

export async function createListing(userId: number, formData: FormData) {
  console.log("form data", formData);
  try {
    presenceCheckBaseFields(formData);

    const requestImageFile = formData.get("image");
    if (!(requestImageFile instanceof File)) {
      throw new Error("Image file is required");
    }

    let listingData: Record<string, any> = {
      title: formData.get("title"),
      description: formData.get("description"),
      type: formData.get("type"),
      category: formData.get("category"),
      condition: formData.get("condition"),
      image: requestImageFile,
      acceptedPaymentTypes: formData.getAll("acceptedPaymentTypes") ?? [],
      price: formData.get("price") ? Number(formData.get("price")) : undefined,
    };

    if (listingData.category === ListingCategories.ClothingAccessories) {
      validateFormDataField(formData, "apparelSize");
      validateFormDataField(formData, "apparelGender");

      listingData = {
        ...listingData,
        apparelSize: formData.get("apparelSize"),
        apparelGender: formData.get("apparelGender"),
      };
    }

    const validatedListingFormData =
      createListingFormDataSchema.parse(listingData);

    await createBucketIfNotExists(listingImagesBucketName);

    const listingImages = await Promise.all(
      [requestImageFile].map(
        async (imageFile) => await uploadImageFile(imageFile)
      )
    );

    await prisma.listing.create({
      data: {
        userId,
        title: validatedListingFormData.title,
        description: validatedListingFormData.description,
        type: validatedListingFormData.type,
        images: {
          createMany: {
            data: listingImages,
          },
        },
        category: validatedListingFormData.category,
        condition: validatedListingFormData.condition,
        acceptedPaymentTypes: validatedListingFormData.acceptedPaymentTypes,
        // apparel: validatedListingFormData.apparelGender,
        // size: validatedListingFormData.apparelSize,
        price: validatedListingFormData.price,
      },
    });
    revalidatePath("/");
    return { status: 200 };
  } catch (error) {
    console.error(error);
    return { status: 500, error: "Internal Server Error" };
  }
}
