import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images : {
    remotePatterns: [new URL('https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/**')],
  }

};

export default nextConfig;
