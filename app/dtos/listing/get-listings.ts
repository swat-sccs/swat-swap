import { z } from "zod";
import { ListingCategories, ListingConditions, ListingTypes } from ".";

export const getListingSchema = z.object({
  id: z.number(),
  userId: z.number(),
  active: z.boolean(),
  image: z.instanceof(File),
  title: z.string(),
  price: z.number().positive(),
  type: z.nativeEnum(ListingTypes),
  description: z.string(),
  category: z.array(z.nativeEnum(ListingCategories)),
  paymentType: z.array(z.string()),
  condition: z.nativeEnum(ListingConditions),
  apparel: z.array(z.string()),
  size: z.array(z.string()),
  color: z.array(z.string()),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const getAllListingsSchema = z.array(getListingSchema);

export type Listing = z.infer<typeof getListingSchema>;
