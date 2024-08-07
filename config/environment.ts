export const nodeEnvironment = process.env.NODE_ENV;
export const isProduction = nodeEnvironment === "production";
export const isDevelopment = nodeEnvironment === "development";

export const listingImagesBucketName = process.env.LISTING_IMAGES_BUCKET_NAME;

export const minioHostname = process.env.MINIO_HOSTNAME;
export const minioPort = process.env.MINIO_PORT;
export const minioUseSSL = process.env.MINO_USE_SSL;
export const minioRootUser = process.env.MINIO_ROOT_USER;
export const minioRootPassword = process.env.MINIO_ROOT_PASSWORD;
export const minioEndpoint = `${
  minioUseSSL === "true" ? "https" : "http"
}://${minioHostname}:${minioPort}`;
export const minioListingImagesEndpoint = `${minioEndpoint}/${listingImagesBucketName}`;
