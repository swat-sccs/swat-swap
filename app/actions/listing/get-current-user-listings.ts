"use server";
import { Listing, listingsSchema } from "@/dtos";
import prisma from "@/prisma/db";
import { getSessionUserId } from "@/utils/hooks";

export async function getCurrentUserListings(): Promise<Listing[]> {
  const userId = await getSessionUserId();
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
