"use server";
import { Listing, listingsSchema } from "@/dtos";
import prisma from "@/prisma/db";

export async function getAvailableListings(userId: number): Promise<Listing[]> {
  const dbListings = await prisma.listing.findMany({
    include: {
      images: true,
    },
    where: {
      active: true,
      userId: {
        not: userId,
      },
    },
  });
  const parsedListings = listingsSchema.parse(dbListings);
  return parsedListings;
}
