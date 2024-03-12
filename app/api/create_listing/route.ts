export const dynamic = "force-dynamic"; // defaults to auto
import prisma from "@/prisma/prisma";
import { createListingSchema } from "@/app/dtos/listing";

export async function POST(req: Request, res: Response) {
  try {
    // add user authentication and authorization checks

    const requestBody = await req.formData();

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
      if (!requestBody.has(field)) {
        return new Response(`${field} is required`, { status: 400 });
      }
    }

    const requestImageFile = requestBody.get("image");
    if (!(requestImageFile instanceof File)) {
      return new Response("Image file is required", { status: 400 });
    }

    const imageBuffer = await requestImageFile.arrayBuffer();
    const imageBlob = new Blob([imageBuffer], { type: "image/jpeg" });
    const imageFile = new File([imageBlob], "image.jpg");

    const listingData = {
      title: requestBody.get("title"),
      price: Number(requestBody.get("price")),
      description: requestBody.get("description"),
      type: requestBody.get("type"),
      category: new Array(requestBody.get("category")),
      paymentType: new Array(requestBody.get("paymentType")),
      condition: requestBody.get("condition"),
      apparelSize: new Array(requestBody.get("apparelSize")),
      apparelGender: new Array(requestBody.get("apparelGender")),
      color: new Array(requestBody.get("color")),
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
    return new Response("Listing created", { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response("Internal server error", { status: 500 });
  }
}

export async function GET(req: Request, res: Response) {
  try {
    const listings = await prisma.listing.findMany();
    return new Response(JSON.stringify(listings), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Internal server error", { status: 500 });
  }
}
