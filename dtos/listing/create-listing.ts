import { z } from "zod";

export const ListingTypes = ["selling", "service"] as const;

export type ListingType = (typeof ListingTypes)[number];

export const FirmOnPriceTypes = ["yes", "no"] as const;

export type FirmOnPriceType = (typeof FirmOnPriceTypes)[number];

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

export const clothingItemSizes = [
  "xxs",
  "xs",
  "s",
  "m",
  "l",
  "xl",
  "xxl",
  "xxxl",
];

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

export const clothingItemGenders = ["male", "female", "unisex"];

export enum ClothingItemGenders {
  male = "m",
  female = "f",
  unisex = "u",
}

export const PaymentTypes = [
  "cash",
  "venmo",
  "paypal",
  "zelle",
  "cashapp",
] as const;
// added cashapp here

export type PaymentType = (typeof PaymentTypes)[number];

export const createListingFormDataSchema = z.object({
  // userId: z.number(),
  image: z.instanceof(File, { message: "Required" }),
  title: z.string(),
  type: z.enum(ListingTypes),
  firmonprice: z.enum(FirmOnPriceTypes), //new thing added, still need to define FirmOnPriceTypes
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
  apparelSize: z.string().optional(),
  apparelGender: z.string().optional(),
  brand: z.string().optional(), //brand is optional
});

export type CreateListingPayload = z.infer<typeof createListingFormDataSchema>;
