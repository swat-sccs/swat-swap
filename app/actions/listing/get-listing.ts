"use server";
import prisma from "@/prisma/db";

export async function getListing(listingId: number) {
  console.log("listingid is", listingId);
  return await prisma.listing.findUnique({
    where: {
      id: listingId,
    },
    include: {
      images: true,
    },
  });
}
