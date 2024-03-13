"use server";

import { createListingSchema } from "@/app/dtos/listing";
import { revalidatePath } from "next/cache";
import prisma from "@/prisma/prisma";

export async function createListing(formData: FormData) {
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

    const imageBuffer = await requestImageFile.arrayBuffer();
    const imageBlob = new Blob([imageBuffer], { type: "image/jpeg" });
    const imageFile = new File([imageBlob], "image.jpg");

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
      image: imageFile,
    };

    const parsedListing = createListingSchema.parse(listingData);
    await prisma.listing.create({
      data: {
        title: parsedListing.title,
        description: parsedListing.description,
        type: parsedListing.type,
        image: [Buffer.from(imageBuffer)],
        category: parsedListing.category,
        paymentType: parsedListing.paymentType,
        condition: parsedListing.condition,
        apparel: parsedListing.apparelGender,
        size: parsedListing.apparelSize,
        color: parsedListing.color,
        price: parsedListing.price,
        // Still need to make this field dynamic
        userId: 1,
      },
    });
    revalidatePath("/");
    return { status: 200 };
  } catch (error) {
    console.error(error);
    return { status: 500, error: "Internal Server Error" };
  }
}
