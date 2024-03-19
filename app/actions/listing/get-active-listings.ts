"use server";
import { Listing, listingsSchema } from "@/app/dtos";
import prisma from "@/prisma/prisma";

export async function getAllActiveUserListings(
  userId: number
): Promise<Listing[]> {
  const dbListings = await prisma.listing.findMany({
    include: {
      images: true,
    },
    where: {
      active: true,
      userId: {
        // TODO: replace with actual userId
        not: userId,
      },
    },
  });

  const validatedListings = listingsSchema.parse(dbListings);
  return validatedListings;
}
