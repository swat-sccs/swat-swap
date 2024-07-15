"use server";
import { Listing, listingsSchema } from "@/dtos";
import { getListings } from "./get-listings";
import { getSessionUserId } from "@/utils/hooks";

export async function getCommunityListings(): Promise<Listing[]> {
  const userId = await getSessionUserId();
  const dbListings = getListings({
    where: {
      userId: {
        not: userId,
      },
      active: true,
    },
  });
  return listingsSchema.parse(dbListings);
}
