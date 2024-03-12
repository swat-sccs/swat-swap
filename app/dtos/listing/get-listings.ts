import { z } from "zod";
import { ListingConditions, ListingTypes } from ".";

export const getListingSchema = z.object({
  id: z.number(),
  userId: z.number(),
  image: z.instanceof(File),
  active: z.boolean(),
  title: z.string(),
  price: z.number().positive(),
  type: z.nativeEnum(ListingTypes),
  description: z.string(),
  category: z.array(z.nativeEnum(ListingConditions)),
  paymentType: z.array(z.string()),
  condition: z.string(),
  apparel: z.array(z.string()),
  size: z.array(z.string()),
  color: z.array(z.string()),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const getAllListingsSchema = z.array(getListingSchema);

export type Listing = z.infer<typeof getListingSchema>;
