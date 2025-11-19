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
        hostname: "vhukmaifwzujizxenajc.supabase.co",
      },
      {
        protocol: "https",
        hostname: "images.clerk.dev",
      },
    ],
    qualities: [80, 100],
  },
  productionBrowserSourceMaps: false,
};

export default nextConfig;
