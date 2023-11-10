/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["score-demo.yalpos.com"],
  },
};

module.exports = nextConfig
