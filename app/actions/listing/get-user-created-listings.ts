"use server";

import { Listing, listingsSchema } from "@/app/dtos";
import prisma from "@/prisma/prisma";

export async function getUserCreatedListings(
  userId: number
): Promise<Listing[]> {
  const dbListings = await prisma.listing.findMany({
    where: {
      userId: userId,
    },
  });

  const validatedListings = listingsSchema.parse(dbListings);
  return validatedListings;
}
