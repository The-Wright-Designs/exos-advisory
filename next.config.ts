import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [425, 900, 1400],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
