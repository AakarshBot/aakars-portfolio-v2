import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/AakarshBot/aakars-portfolio-new/main/public/**",
      },
    ],
  },
};

export default nextConfig;
