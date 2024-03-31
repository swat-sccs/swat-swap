"use server";
import { Listing, listingsSchema } from "@/app/dtos";
import prisma from "@/prisma/prisma";

export async function getAllActiveUserListings(
  userId: string | null | undefined
): Promise<Listing[]> {
  const dbListings = await prisma.listing.findMany({
    // include: {
    //   images: true,
    // },
    where: {
    //   active: true,
      userId: {
        // TODO: replace with actual userId (keep for now for testing)
        not: userId,
      },
    },
  });

  const validatedListings = listingsSchema.parse(dbListings);
  return validatedListings;
}
