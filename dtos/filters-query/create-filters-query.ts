import { z } from "zod";
import { ListingCategories } from "../listing";

export const createFiltersQueryFormSchema = z.object({
  category: z.array(
    z
      .enum(ListingCategories, {
        errorMap: () => ({
          message: "Invalid condition",
        }),
      })
      .optional()
  ),
});

export type CreateFiltersQueryPayload = z.infer<
  typeof createFiltersQueryFormSchema
>;
