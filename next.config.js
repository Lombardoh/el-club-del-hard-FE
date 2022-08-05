/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.ALLOW_BACKEND_IMAGE_URL, 'mexx-img-2019.s3.amazonaws.com', 'www.zotac.com'],	
    loader: 'akamai',
    path: '',
  },
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    ALLOW_BACKEND_IMAGE_URL: process.env.ALLOW_BACKEND_IMAGE_URL,
  },
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/Login": { page: "/Login" }
    };
  }
}

module.exports = nextConfig
  