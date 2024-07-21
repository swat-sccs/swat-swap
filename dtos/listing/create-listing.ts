import { z } from "zod";

export const ListingTypes = ["selling", "service"] as const;

export type ListingType = (typeof ListingTypes)[number];

export const ListingConditions = [
  "brand_new_unboxed",
  "brand_new_openbox",
  "like_new",
  "lightly_used",
  "well_loved",
  "not_working",
  "parts_missing",
] as const;

export type ListingCondition = (typeof ListingConditions)[number];

export const ListingCategories = [
  "clothing",
  "furniture",
  "school_supplies",
  "books",
  "electronics",
  "sports_equipment",
  "musical_instrument",
  "transportation",
  "misc",
] as const;

export type ListingCategory = (typeof ListingCategories)[number];

export enum ClothingItemSizes {
  XXS = "xxs",
  XS = "xs",
  S = "s",
  M = "m",
  L = "l",
  XL = "xl",
  XXL = "xxl",
  XXXL = "xxxl",
}

export enum ClothingItemGenders {
  XXS = "xxs",
  XS = "xs",
  S = "s",
  M = "m",
  L = "l",
  XL = "xl",
  XXL = "xxl",
  XXXL = "xxxl",
}

export const PaymentTypes = ["cash", "venmo", "paypal", "zelle"] as const;

export type PaymentType = (typeof PaymentTypes)[number];

export const createListingFormDataSchema = z.object({
  image: z.instanceof(File, { message: "Required" }),
  title: z.string(),
  type: z.enum(ListingTypes),
  description: z.string(),
  category: z.enum(ListingCategories, {
    errorMap: () => ({
      message: "Invalid condition",
    }),
  }),
  price: z.number().positive(),
  acceptedPaymentTypes: z.array(z.enum(PaymentTypes)),
  condition: z.enum(ListingConditions, {
    errorMap: () => ({
      message: "Invalid condition",
    }),
  }),
  apparelSize: z.array(z.string()).optional(),
  apparelGender: z.array(z.string()).optional(),
});

export type CreateListingPayload = z.infer<typeof createListingFormDataSchema>;
