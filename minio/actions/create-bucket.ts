import { minioClient } from "../minio";

export async function createBucketIfNotExists(bucketName: string) {
  const bucketExists = await minioClient.bucketExists(bucketName);
  if (!bucketExists) {
    await minioClient.makeBucket(bucketName);
  }
}
