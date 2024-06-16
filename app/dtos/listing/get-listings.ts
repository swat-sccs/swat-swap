import { z } from "zod";
import { ListingCategories, ListingConditions, ListingTypes } from ".";

export const listingImageSchema = z.object({
  id: z.number(),
  bucketName: z.string(),
  fileName: z.string(),
  checksum: z.string(),
  listingId: z.number(),
});

export const listingSchema = z.object({
  id: z.number(),
  userId: z.number(),
  active: z.boolean(),
  images: z.array(listingImageSchema),
  title: z.string(),
  price: z.number().positive(),
  type: z.nativeEnum(ListingTypes),
  description: z.string(),
  category: z.nativeEnum(ListingCategories),
  paymentType: z.array(z.string()),
  condition: z.nativeEnum(ListingConditions),
  apparel: z.array(z.string()),
  size: z.array(z.string()),
  color: z.array(z.string()),
  createdAt: z.date(),
  updatedAt: z.date(),
  favorited: z.boolean(),
});

export const listingsSchema = z.array(listingSchema);

export type Listing = z.infer<typeof listingSchema>;

export const userListingSchema = listingSchema.omit({ favorited: true });

export type UserListing = z.infer<typeof userListingSchema>;

export const userListingsSchema = z.array(userListingSchema);
