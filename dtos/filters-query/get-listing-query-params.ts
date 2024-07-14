import { z } from "zod";
import { ListingCategories } from "../listing";

export const getListingFiltersSchema = z.object({
  category: z.array(z.enum(ListingCategories)),
});

export type ListingFilters = z.infer<typeof getListingFiltersSchema>;
