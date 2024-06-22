import { z } from "zod";
import {
  ClothingItemGenders,
  ClothingItemSizes,
  ListingCategories,
  ListingConditions,
  ListingTypes,
} from ".";

export function isClothingListing(listing: any): listing is ClothingListing {
  return (
    listing &&
    listing.category &&
    listing.category === ListingCategories.ClothingAccessories
  );
}

export const listingImageSchema = z.object({
  id: z.number(),
  bucketName: z.string(),
  fileName: z.string(),
  checksum: z.string(),
  listingId: z.number(),
});

export const clothingItemSchema = z.object({
  size: z.nativeEnum(ClothingItemSizes),
  gender: z.nativeEnum(ClothingItemGenders),
});

export const baseListingSchema = z.object({
  id: z.number(),
  active: z.boolean(),
  userId: z.number(),
  title: z.string(),
  description: z.string(),
  images: z.array(listingImageSchema),
  category: z.nativeEnum(ListingCategories),
  type: z.nativeEnum(ListingTypes),
  price: z.number().positive().nullable(),
  acceptedPaymentTypes: z.array(z.string()),
  condition: z.nativeEnum(ListingConditions),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const clothingListingSchema = baseListingSchema.extend({
  clothing: clothingItemSchema,
});

export const favoritedListingSchema = baseListingSchema.extend({
  favorited: z.boolean(),
});

export const listingsSchema = z.array(baseListingSchema);

export const userListingSchema = favoritedListingSchema.omit({
  favorited: true,
});

export const userListingsSchema = z.array(userListingSchema);

export type Listing = z.infer<typeof baseListingSchema>;

export type UserListing = z.infer<typeof userListingSchema>;

export type ClothingListing = z.infer<typeof clothingListingSchema>;
