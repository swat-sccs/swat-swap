import * as Minio from "minio";
import { isProduction } from "./environment";

const minioClientSingelton = () =>
  new Minio.Client({
    endPoint: process.env.MINIO_ENDPOINT!,
    port: parseInt(process.env.MINIO_PORT!),
    useSSL: !!process.env.MINO_USE_SSL,
    accessKey: process.env.MINIO_ROOT_USER!,
    secretKey: process.env.MINIO_ROOT_PASSWORD!,
  });

declare global {
  var minioClient: undefined | ReturnType<typeof minioClientSingelton>;
}

export const minioClient = globalThis.minioClient ?? minioClientSingelton();

if (!isProduction) {
  globalThis.minioClient = minioClient;
}
