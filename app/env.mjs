import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.string(),
  POSTGRES_USER: z.string(),
  POSTGRES_PASSWORD: z.string(),
  POSTGRES_DB: z.string(),
  INTERNAL_PORT: z.string(),
  KEYCLOAK_ID: z.string(),
  KEYCLOAK_SECRET: z.string(),
  KEYCLOAK_ISSUER: z.string(),
  NEXTAUTH_SECRET: z.string(),
  NEXTAUTH_URL: z.string(),
  DATABASE_URL: z.string(),
  MINIO_ENDPOINT: z.string(),
  MINIO_PORT: z.string().transform((val) => parseInt(val)),
  MINIO_CONSOLE_PORT: z.string().transform((val) => parseInt(val)),
  MINO_USE_SSL: z.string().transform((val) => val === "true"),
  MINIO_ROOT_USER: z.string(),
  MINIO_ROOT_PASSWORD: z.string(),
  LISTING_IMAGES_BUCKET_NAME: z.string(),
});


export const parsedEnv = envSchema.parse(process.env);
