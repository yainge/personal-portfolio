/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/personal-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/personal-portfolio/' : '',
}

module.exports = nextConfig