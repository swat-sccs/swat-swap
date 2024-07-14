import { minioClient } from "@/config/minio";

export async function uploadFileToListingImagesBucket(
  file: File,
  bucketName: string
) {
  const imageBuffer = await file.arrayBuffer();

  await minioClient.putObject(
    bucketName,
    file.name,
    Buffer.from(imageBuffer),
    imageBuffer.byteLength,
    {
      "Content-Type": file.type,
      "x-amz-acl": "public-read",
    }
  );

  return "swatswap-minio-service:9000/" + bucketName + "/" + file.name;
}
