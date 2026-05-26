/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.franchiseexpo.com",
      },
    ],
  },
};

module.exports = nextConfig;
