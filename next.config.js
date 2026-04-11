/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nologin.eaof.vn",
        pathname: "/wp-content/uploads/**"
      }
    ]
  }
};

module.exports = nextConfig;
