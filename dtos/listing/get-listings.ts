import { z } from "zod";
import {
  ClothingItemGenders,
  ClothingItemSizes,
  ListingCategories,
  ListingConditions,
  ListingTypes,
  PaymentType,
} from ".";

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
  active: z.boolean(),
  userId: z.number(),
  title: z.string(),
  description: z.string(),
  images: z.array(listingImageSchema),
  category: z.enum(ListingCategories),
  type: z.nativeEnum(ListingTypes),
  price: z.number().positive(),
  acceptedPaymentTypes: z.array(z.nativeEnum(PaymentType)),
  condition: z.nativeEnum(ListingConditions),
  clothing: z.optional(clothingItemSchema),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const listingsSchema = z.array(listingSchema);

export const savedListingSchema = listingSchema.extend({
  saved: z.boolean(),
});
export const savedListingsSchema = z.array(savedListingSchema);

export type Listing = z.infer<typeof listingSchema>;

export type SavedListing = z.infer<typeof savedListingSchema>;
