import { minioClient } from "@/config/minio";

export async function createBucketIfNotExists(bucketName: string) {
  const bucketExists = await minioClient.bucketExists(bucketName);
  if (!bucketExists) {
    await minioClient.makeBucket(bucketName);

    const readOnlyPolicy = {
      Version: "2012-10-17",
      Statement: [
        {
          Effect: "Allow",
          Principal: {
            AWS: "*",
          },
          Action: "s3:GetObject",
          Resource: [`arn:aws:s3:::${bucketName}/*`],
        },
      ],
    };

    await minioClient.setBucketPolicy(
      bucketName,
      JSON.stringify(readOnlyPolicy)
    );
  }
}
