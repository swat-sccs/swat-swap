"use server";
import { createListingFormDataSchema } from "@/dtos/listing";
import { revalidatePath } from "next/cache";
import prisma from "@/prisma/db";
import {
  createBucketIfNotExists,
  uploadFileToListingImagesBucket,
} from "@/app/actions/minio";
import { listingImagesBucketName } from "@/config";
import { firmonprice } from "@prisma/client";
import { validate } from "uuid";

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
    "firmonprice", //firmonprice should be required
  ];

  // const clothingRequiredFields = [

  // ]

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

  await uploadFileToListingImagesBucket(imageFile, listingImagesBucketName!);

  const checksum = btoa(
    digestBytes.reduce((acc, byte) => acc + String.fromCharCode(byte), "")
  );

  return {
    bucketName: listingImagesBucketName!,
    checksum: checksum,
    fileName: imageFile.name,
  };
};

export async function createListing(userId: number, formData: FormData) {
  console.log("form data", formData);
  console.log("userID::::::::", userId);
  try {
    presenceCheckBaseFields(formData);

    const requestImageFile = formData.get("image");
    if (!(requestImageFile instanceof File)) {
      throw new Error("Image file is required");
    }

    let listingData: Record<string, any> = {
      // userId: formData.get('userId'),
      title: formData.get("title"),
      description: formData.get("description"),
      type: formData.get("type"),
      category: formData.get("category"),
      //
      condition: formData.get("condition"),
      firmonprice: formData.get("firmonprice"), //added this to fix bug
      brand: formData.get("brand"),
      image: requestImageFile,
      acceptedPaymentTypes: formData.getAll("acceptedPaymentTypes") ?? [],
      price: formData.get("price") ? Number(formData.get("price")) : undefined,
    };

    if (listingData.category === "clothing") { 
      //i'm not sure if user is ever prompted for this info when creating a listing for clothing...
      validateFormDataField(formData, "apparelSize");
      validateFormDataField(formData, "apparelGender");

      listingData = {
        ...listingData,
        apparelSize: formData.get("apparelSize"),
        apparelGender: formData.get("apparelGender"),
      };
    }
    console.log("Listing Data: \n", listingData)
    const validatedListingFormData =
      createListingFormDataSchema.parse(listingData);

    await createBucketIfNotExists(listingImagesBucketName!);

    const listingImages = await Promise.all(
      [requestImageFile].map(
        async (imageFile) => await uploadImageFile(imageFile)
      )
    );

    await prisma.listing.create({
      data: {
        // userId: validatedListingFormData.userId,
        userId,
        title: validatedListingFormData.title,
        description: validatedListingFormData.description,
        type: validatedListingFormData.type,
        images: {
          createMany: {
            data: listingImages,
          },
        },
        firmonprice: validatedListingFormData.firmonprice,
        category: validatedListingFormData.category,
        condition: validatedListingFormData.condition,
        acceptedPaymentTypes: validatedListingFormData.acceptedPaymentTypes,
        // apparel: validatedListingFormData.apparelGender, //new
        // size: validatedListingFormData.apparelSize, //new
        brand: validatedListingFormData.brand,
        //brand is another optional thing, so is also commented out ?? (the commenting out is something theron had originally done for some reason...)
        //apparel and size commented out?
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
