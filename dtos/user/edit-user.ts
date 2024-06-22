import { z } from "zod";

export const editUserSchema = z.object({
  displayName: z
    .string()
    .min(1, { message: "Display name must be at least 1 character long." }),
  biography: z
    .string()
    .min(1, { message: "Biography must be at least 1 character long." }),
  email: z.string().email({ message: "Invalid email address." }),
});

export type EditUser = z.infer<typeof editUserSchema>;
