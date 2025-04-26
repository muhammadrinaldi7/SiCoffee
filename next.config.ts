import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "localhost:8000",
      "localhost:8080",
      "127.0.0.1:8000",
      "localhost",
      "images.unsplash.com",
      "images.pexels.com",
      "travel-journal-api-bootcamp.do.dibimbing.id",
      "www.ancol.com",
      "s-light.tiket.photos",
      "media.kompas.tv",
      "via.placeholder.com",
      "raw.githubusercontent.com",
      "i.pinimg.com",
      "4.bp.blogspot.com",
      "robohash.org",
      "instagram.fbdj5-1.fna.fbcdn.net",
    ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/storage/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/storage/**",
      },
    ],
  },
};

export default nextConfig;
