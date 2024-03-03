import { list } from "postcss";
export const dynamic = "force-dynamic"; // defaults to auto
import {
  ListingType,
  CategoryType,
  PaymentType,
  ConditionType,
} from "@/app/utils/types";
import prisma from "@/prisma/prisma";

export async function POST(request: Request) {
  try {
    const res = await request.formData();

    // Converting file to buffer
    const image = res.get("image") as any;
    const imageBuffer = await image.arrayBuffer();
    const uint8Array = new Uint8Array(imageBuffer);

    // Apparently, FormData can't handle arrays, so we have to parse them manually
    // Might need to change fix the any type for W.
    const category = JSON.parse(res.getAll("category")[1] as any);
    const payment = JSON.parse(res.getAll("payment")[1] as any);
    const condition = JSON.parse(res.getAll("condition")[1] as any);
    const gender = JSON.parse(res.getAll("gender")[1] as any);
    const size = JSON.parse(res.getAll("size")[1] as any);
    const color = JSON.parse(res.getAll("color")[1] as any);

    const listing = await prisma.listing.create({
      data: {
        title: res.get("title") as string,
        description: res.get("description") as string,
        type: res.get("type") as ListingType,
        image: [Buffer.from(uint8Array)],
        category: category,
        paymentType: payment,
        condition: condition,
        apparel: gender,
        size: size,
        color: color,
        price: Number(res.get("price")),

        // Still need to make this field dynamic
        userId: 1,
      },
    });

    console.log(listing);

    return Response.json({ success: "Listing created successfully" });
  } catch (error) {
    console.error(error);
  }
}
