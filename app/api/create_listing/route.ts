import { list } from "postcss";
export const dynamic = "force-dynamic"; // defaults to auto
import {
  ListingType,
  CategoryType,
  PaymentType,
  ConditionType,
} from "@/app/utils/types";
import prisma from "@/prisma/prisma";
import * as fs from "fs/promises";

export async function POST(request: Request) {
  try {
    const res = await request.formData();

    // Converting file to buffer
    const image = res.get("image") as any;
    const imageBuffer = await image.arrayBuffer();
    const uint8Array = new Uint8Array(imageBuffer);

    const listing = await prisma.listing.create({
      data: {
        title: res.get("title") as string,
        description: res.get("description") as string,
        type: res.get("type") as ListingType,
        image: [Buffer.from(uint8Array)],
        category: null,
        paymentType: null,
        condition: null,
        price: 0,

        // Still need to make this field dynamic
        userId: 1,
      },
    });

    // console.log(listing);

    return Response.json({ success: "Listing created successfully" });
  } catch (error) {
    console.error(error);
  }
}
