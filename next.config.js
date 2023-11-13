/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "score-demo.yalpos.com",
        port: "",
        pathname: "/storage/*/**",
      },
    ],
  },
};

module.exports = nextConfig;
