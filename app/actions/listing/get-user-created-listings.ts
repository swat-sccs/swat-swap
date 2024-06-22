"use server";

import { UserListing, userListingsSchema } from "@/dtos";
import prisma from "@/prisma/prisma";

export async function getUserCreatedListings(
  userId: number
): Promise<UserListing[]> {
  const dbListings = await prisma.listing.findMany({
    where: {
      userId: userId,
    },
    include: {
      images: true,
    },
  });

  const validatedListings = userListingsSchema.parse(dbListings);
  return validatedListings;
}
