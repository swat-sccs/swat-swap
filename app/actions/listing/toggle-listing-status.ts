"use server";
import prisma from "@/prisma/db";

export async function toggleListingActivation(
  listingId: number,
  active: boolean
) {
  await prisma.listing.update({
    where: {
      id: listingId,
    },
    data: {
      active,
    },
  });
}
