/** @type {import('next').NextConfig} */
const nextConfig = {
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
