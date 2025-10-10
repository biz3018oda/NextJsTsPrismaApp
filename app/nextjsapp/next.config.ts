import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // ビルド時の ESLint エラーで止まらないようにする
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
