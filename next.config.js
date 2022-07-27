/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.BACKEND_URL, 'mexx-img-2019.s3.amazonaws.com', 'fanaticosdelhardware.com', 'www.zotac.com'],	
  },
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
  },

}

module.exports = nextConfig
  