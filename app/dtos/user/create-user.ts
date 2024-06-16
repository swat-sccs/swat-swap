import { z } from "zod";

export const createUserPayloadSchema = z.object({
  name: z.string(),
  email: z.string(),
  keycloakId: z.string(),
});

export type CreateUserPayload = z.infer<typeof createUserPayloadSchema>;
