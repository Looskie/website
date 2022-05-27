/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: process.env.NODE_ENV === "production" ? false : true,
  },
};

module.exports = nextConfig;
