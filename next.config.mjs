/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: process.env.MINIO_HOSTNAME,
                port: "9000",
                pathname: "**"
            },
        ]
    }
};

export default nextConfig;

