import type { NextConfig } from "next";

const allowedDevOrigins = (process.env.NEXT_ALLOWED_DEV_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const nextConfig: NextConfig = {
  transpilePackages: ['@giasu-kntech/shared'], // Ép Next.js biên dịch cả gói shared dùng chung
  allowedDevOrigins,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://127.0.0.1:5000/api/:path*",
      },
      {
        source: "/uploads/:path*",
        destination: "http://127.0.0.1:5000/uploads/:path*",
      },
      {
        source: "/socket.io/:path*",
        destination: "http://127.0.0.1:5000/socket.io/:path*",
      },
    ];
  },
};

export default nextConfig;

