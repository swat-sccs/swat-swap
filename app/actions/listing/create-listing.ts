"use server";

import { createListingFormDataSchema } from "@/app/dtos/listing";
import { revalidatePath } from "next/cache";
import prisma from "@/prisma/prisma";
import {
  createBucketIfNotExists,
  uploadFileToListingImagesBucket,
} from "@/minio/actions";
import { listingImagesBucketName } from "@/config";

export async function createListing(userId: number, formData: FormData) {
  try {
    const requiredFields = [
      "title",
      "description",
      "type",
      "category",
      "price",
      "paymentType",
      "condition",
      "apparelSize",
      "apparelGender",
      "color",
    ];

    for (const field of requiredFields) {
      if (!formData.has(field)) {
        return new Response(`${field} is required`, { status: 400 });
      }
    }

    const requestImageFile = formData.get("image");
    if (!(requestImageFile instanceof File)) {
      return new Response("Image file is required", { status: 400 });
    }

    const listingData = {
      title: formData.get("title"),
      price: Number(formData.get("price")),
      description: formData.get("description"),
      type: formData.get("type"),
      category: new Array(formData.get("category")),
      paymentType: new Array(formData.get("paymentType")),
      condition: formData.get("condition"),
      apparelSize: new Array(formData.get("apparelSize")),
      apparelGender: new Array(formData.get("apparelGender")),
      color: new Array(formData.get("color")),
      image: requestImageFile,
    };

    const validatedListingFormData =
      createListingFormDataSchema.parse(listingData);

    await createBucketIfNotExists(listingImagesBucketName);

    const imageBuffer = await requestImageFile.arrayBuffer();

    const digest = await crypto.subtle.digest("SHA-256", imageBuffer);
    const digestBytes = new Uint8Array(digest);
    const checksum = btoa(
      digestBytes.reduce((acc, byte) => acc + String.fromCharCode(byte), "")
    );

    await uploadFileToListingImagesBucket(
      requestImageFile,
      listingImagesBucketName
    );

    const listingImages = [
      {
        bucketName: listingImagesBucketName,
        checksum: checksum,
        fileName: requestImageFile.name,
      },
    ];

    await prisma.listing.create({
      data: {
        title: validatedListingFormData.title,
        description: validatedListingFormData.description,
        type: validatedListingFormData.type,
        images: {
          createMany: {
            data: listingImages,
          },
        },
        category: validatedListingFormData.category,
        paymentType: validatedListingFormData.paymentType,
        condition: validatedListingFormData.condition,
        apparel: validatedListingFormData.apparelGender,
        size: validatedListingFormData.apparelSize,
        color: validatedListingFormData.color,
        price: validatedListingFormData.price,
        userId,
      },
    });
    revalidatePath("/");
    return { status: 200 };
  } catch (error) {
    console.error(error);
    return { status: 500, error: "Internal Server Error" };
  }
}
