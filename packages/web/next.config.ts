import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@giasu-kntech/shared'], // Ép Next.js biên dịch cả gói shared dùng chung
  allowedDevOrigins: ['192.168.1.6', 'localhost:3000'],
};

export default nextConfig;