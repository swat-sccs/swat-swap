import { isProduction } from "@/config";
import { parsedEnv } from "@/app/env.mjs";
import * as Minio from "minio";

const minioClientSingelton = () =>
  new Minio.Client({
    endPoint: parsedEnv.MINIO_ENDPOINT,
    port: parsedEnv.MINIO_PORT,
    useSSL: parsedEnv.MINO_USE_SSL,
    accessKey: parsedEnv.MINIO_ROOT_USER,
    secretKey: parsedEnv.MINIO_ROOT_PASSWORD,
  });

declare global {
  var minioClient: undefined | ReturnType<typeof minioClientSingelton>;
}

export const minioClient = globalThis.minioClient ?? minioClientSingelton();

if (!isProduction) {
  globalThis.minioClient = minioClient;
}
