/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  output: 'standalone',
  trailingSlash: true,
  experimental: {
    outputFileTracingRoot: undefined
  }
}

module.exports = nextConfig
