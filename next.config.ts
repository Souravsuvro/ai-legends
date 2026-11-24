import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // Keep room for future Server Actions / Agent runtime
  },
};

export default nextConfig;
