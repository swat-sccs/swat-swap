import { z } from "zod";

export const getUserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  displayName: z.string(),
  biography: z.string(),
});

export type User = z.infer<typeof getUserSchema>;
