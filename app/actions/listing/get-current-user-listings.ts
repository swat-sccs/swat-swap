"use server";
import { Listing, listingsSchema } from "@/dtos";
import { getSessionUserId } from "@/utils/hooks";
import { getListings } from "./get-listings";

export async function getCurrentUserListings(): Promise<Listing[]> {
  const userId = await getSessionUserId();
  const dbListings = await getListings({
    where: {
      userId: {
        equals: userId,
      },
    },
  });

  const validatedListings = listingsSchema.parse(dbListings);
  return validatedListings;
}
