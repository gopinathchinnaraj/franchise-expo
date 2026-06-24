/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.magnific.com', 'media.istockphoto.com', 'www.franchiseexpo.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.magnific.com',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
      },
    ],
  },
}

module.exports = nextConfig