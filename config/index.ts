import { parsedEnv } from "@/app/env.mjs";

export const nodeEnvironment = parsedEnv.NODE_ENV;
export const isProduction = nodeEnvironment === "production";
export const isDevelopment = nodeEnvironment === "development";

export const minioEndpoint = parsedEnv.MINIO_ENDPOINT;
export const minioPort = parsedEnv.MINIO_PORT;
export const minioUseSSL = parsedEnv.MINO_USE_SSL;
export const minioRootUser = parsedEnv.MINIO_ROOT_USER;
export const minioRootPassword = parsedEnv.MINIO_ROOT_PASSWORD;

export const listingImagesBucketName = parsedEnv.LISTING_IMAGES_BUCKET_NAME;
