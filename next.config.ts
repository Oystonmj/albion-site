import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: []
  },
  experimental: {
    optimizePackageImports: ["lucide-react"]
  }
};
export default nextConfig;