"use server";
import { Listing, getAllListingsSchema } from "../dtos/listing";
import prisma from "@/prisma/prisma";

export async function getAllActiveListings(): Promise<Listing[]> {
  const listings = await prisma.listing.findMany({
    where: {
      active: true,
    },
  });

  const mappedListings = listings.map((listing) => {
    const imageFile = new File([listing.image[0]], "image.jpg");
    return {
      ...listing,
      image: imageFile,
    };
  });

  const parsedListings = getAllListingsSchema.parse(mappedListings);
  return parsedListings;
}
