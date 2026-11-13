import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the root to this project. Without it Next.js picks C:\Users\MSI
    // (a stray package-lock.json lives there) and fails to resolve modules.
    root: __dirname,
  },
};

export default nextConfig;
