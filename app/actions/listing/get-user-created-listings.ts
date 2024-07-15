"use server";
import { Listing, listingsSchema } from "@/dtos";
import prisma from "@/prisma/db";

export async function getUserCreatedListings(
  userId: number
): Promise<Listing[]> {
  const dbListings = await prisma.listing.findMany({
    where: {
      userId: userId,
    },
    include: {
      images: true,
    },
  });

  const validatedListings = listingsSchema.parse(dbListings);
  return validatedListings;
}
