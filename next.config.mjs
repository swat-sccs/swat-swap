/** @type {import('next').NextConfig} */
import("./app/env.mjs")
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "host.docker.internal",  
                port: "9000",
                pathname: "/swatswap-listing-images/*"
            }
        ]
    }
};

export default nextConfig;
