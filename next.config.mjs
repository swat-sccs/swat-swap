/** @type {import('next').NextConfig} */
import("./app/env.mjs");
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: process.env.MINIO_ENDPOINT,
                port: "9000",
                pathname: "**"
            },
        ]
    }
};

export default nextConfig;

