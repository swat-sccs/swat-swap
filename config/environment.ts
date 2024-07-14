export const nodeEnvironment = process.env.NODE_ENV;
export const isProduction = nodeEnvironment === "production";
export const isDevelopment = nodeEnvironment === "development";

export const minioEndpoint = process.env.MINIO_ENDPOINT;
export const minioPort = process.env.MINIO_PORT;
export const minioUseSSL = process.env.MINO_USE_SSL;
export const minioRootUser = process.env.MINIO_ROOT_USER;
export const minioRootPassword = process.env.MINIO_ROOT_PASSWORD;
export const listingImagesBucketName = process.env.LISTING_IMAGES_BUCKET_NAME;
