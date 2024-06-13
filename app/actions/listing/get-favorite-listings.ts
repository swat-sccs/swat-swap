"use server";
import { Listing, listingsSchema } from "@/app/dtos";
import prisma from "@/prisma/prisma";

export async function getAllFavoritedListings(
  userId: number
): Promise<Listing[]> {
  const dbListings = await prisma.favoriteListing.findMany({
    where: {
      userId: {
        equals: userId,
      },
    },
    include: {
      listing: true,
    },
  });

  const mappedListings = dbListings.map((listing) => {
    return { ...listing, favorited: true };
  });

  const validatedListings = listingsSchema.parse(mappedListings);
  return validatedListings;
}
