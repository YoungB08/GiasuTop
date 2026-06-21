import type { NextConfig } from "next";

const allowedDevOrigins = (process.env.NEXT_ALLOWED_DEV_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const nextConfig: NextConfig = {
  transpilePackages: ['@giasu-kntech/shared'], // Ép Next.js biên dịch cả gói shared dùng chung
  allowedDevOrigins,
};

export default nextConfig;
