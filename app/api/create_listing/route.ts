import { list } from "postcss";
export const dynamic = "force-dynamic"; // defaults to auto
import { ListingType } from "@/app/utils/types";
import prisma from "@/prisma/prisma";

export async function POST(request: Request) {
  try {
    const res = await request.formData();

    const listing = await prisma.listing.create({
      data: {
        title: res.get("title") as string,
        description: res.get("description") as string,
        // image: res.get("image") as unknown as Buffer,
        type: res.get("type") as ListingType,
        category: res.get("category") as string,
        price: 0,
        userId: 293,
      },
    });

    console.log(listing);

    return Response.json({ success: "Listing created successfully" });
  } catch (error) {
    console.error(error);
  }
}
