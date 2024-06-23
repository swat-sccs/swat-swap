"use server";
import { SavedListing, savedListingsSchema } from "@/dtos";
import prisma from "@/prisma/prisma";

export async function getSavedListings(
  userId: number
): Promise<SavedListing[]> {
  const dbListings = await prisma.favoriteListing.findMany({
    where: {
      userId: {
        equals: userId,
      },
      listing: {
        active: {
          equals: true,
        },
      },
    },
    include: {
      listing: {
        include: {
          images: true,
        },
      },
    },
  });

  const mappedListings = dbListings.map((listing) => {
    return { ...listing.listing, saved: true };
  });

  const validatedListings = savedListingsSchema.parse(mappedListings);

  return validatedListings;
}
