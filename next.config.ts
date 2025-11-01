import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "https://vhukmaifwzujizxenajc.supabase.co",
      },
    ],
  },
};

export default nextConfig;
