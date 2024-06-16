"use server";
import { Listing, listingsSchema } from "@/app/dtos";
import prisma from "@/prisma/prisma";

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

  const favoritedListings = await prisma.favoriteListing.findMany({
    where: {
      userId: {
        equals: userId,
      },
    },
  });

  const mergedListings = dbListings.map((listing) => {
    const favorited = favoritedListings.some(
      (favorite) => favorite.listingId === listing.id
    );
    return { ...listing, favorited };
  });

  const validatedListings = listingsSchema.parse(mergedListings);
  return validatedListings;
}
