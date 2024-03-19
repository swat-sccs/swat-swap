import { minioClient } from "../minio";

export async function fileExists(bucketName: string, fileName: string) {
  try {
    await minioClient.statObject(bucketName, fileName);
    return true;
  } catch (err) {
    return false;
  }
}
