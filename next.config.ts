import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mobiroid.ir",
      },
    ],
  },
};

export default nextConfig;
