/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scoreboard.yalpos.com",
        port: "",
        pathname: "/storage/*/**",
      },
    ],
  },
};

module.exports = nextConfig;
