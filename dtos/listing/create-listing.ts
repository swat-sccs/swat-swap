import { z } from "zod";

export enum ListingTypes {
  Selling = "selling",
  // Buying = "buying",
  Service = "service",
}

export enum ListingConditions {
  BrandNewUnboxed = "brand_new_unboxed",
  BrandNewOpenbox = "brand_new_openbox",
  LikeNew = "like_new",
  LightlyUsed = "lightly_used",
  WellLoved = "well_loved",
  NotWorking = "not_working",
  PartsMissing = "parts_missing",
}
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

export enum PaymentType {
  Cash = "cash",
  Venmo = "venmo",
  Paypal = "paypal",
  Zelle = "zelle",
}

export const createListingFormDataSchema = z.object({
  image: z.instanceof(File, { message: "Required" }),
  title: z.string(),
  type: z.nativeEnum(ListingTypes),
  description: z.string(),
  category: z.enum(ListingCategories, {
    errorMap: () => ({
      message: "Invalid condition",
    }),
  }),
  price: z.number().positive(),
  acceptedPaymentTypes: z.array(z.nativeEnum(PaymentType)),
  condition: z.nativeEnum(ListingConditions, {
    errorMap: () => ({
      message: "Invalid condition",
    }),
  }),
  apparelSize: z.array(z.string()).optional(),
  apparelGender: z.array(z.string()).optional(),
});

export type CreateListingPayload = z.infer<typeof createListingFormDataSchema>;
