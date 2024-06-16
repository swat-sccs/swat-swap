import { z } from "zod";

export enum ListingTypes {
  Selling = "selling",
  Buying = "buying",
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

export const createListingFormDataSchema = z.object({
  image: z.instanceof(File),
  title: z.string(),
  price: z.number().positive(),
  type: z.nativeEnum(ListingTypes),
  description: z.string(),
  category: z.nativeEnum(ListingCategories),
  paymentType: z.array(z.string()),
  condition: z.nativeEnum(ListingConditions),
  apparelSize: z.array(z.string()),
  apparelGender: z.array(z.string()),
  color: z.array(z.string()),
});

export type CreateListingPayload = z.infer<typeof createListingFormDataSchema>;
