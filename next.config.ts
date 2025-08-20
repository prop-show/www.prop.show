import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://bitmc.uno/picgo/126662463_p2.jpg')]
  }
};

export default nextConfig;
