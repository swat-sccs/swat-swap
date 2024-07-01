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

export enum ListingCategories {
  ClothingAccessories = "clothing_accessories",
  FurnitureDecor = "furniture_decor",
  SchoolSupplies = "school_supplies",
  Books = "books",
  Electronics = "electronics",
  SportsEquipment = "sports_equipment",
  MusicInstruments = "music_instruments",
  Transportation = "transportation",
  Misc = "misc",
}

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

export const createListingFormDataSchema = z.object({
  image: z.instanceof(File, { message: "Required" }),
  title: z.string(),
  type: z.nativeEnum(ListingTypes),
  description: z.string(),
  category: z.nativeEnum(ListingCategories, {
    errorMap: () => ({
      message: "Invalid condition",
    }),
  }),
  price: z.number().positive(),
  acceptedPaymentTypes: z.array(z.string()),
  condition: z.nativeEnum(ListingConditions, {
    errorMap: () => ({
      message: "Invalid condition",
    }),
  }),
  apparelSize: z.array(z.string()).optional(),
  apparelGender: z.array(z.string()).optional(),
});

export type CreateListingPayload = z.infer<typeof createListingFormDataSchema>;
