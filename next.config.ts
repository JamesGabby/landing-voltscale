import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.loom.com",
        pathname: "/sessions/thumbnails/**",
      },
    ],
  },
};

export default nextConfig;
