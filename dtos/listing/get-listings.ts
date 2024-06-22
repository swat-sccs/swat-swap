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
  acceptedPaymentTypes: z.array(z.string()),
  condition: z.nativeEnum(ListingConditions),
  apparel: z.array(z.string()),
  size: z.array(z.string()),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const clothingListingSchema = listingSchema.extend({
  clothing: clothingItemSchema,
});

export const favoritedListingSchema = listingSchema.extend({
  favorited: z.boolean(),
});

export const listingsSchema = z.array(listingSchema);

export const userListingSchema = favoritedListingSchema.omit({
  favorited: true,
});

export const userListingsSchema = z.array(userListingSchema);

export type Listing = z.infer<typeof listingSchema>;

export type UserListing = z.infer<typeof userListingSchema>;

export type ClothingListing = z.infer<typeof clothingListingSchema>;
