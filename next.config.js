/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compiler: {
    removeConsole: true,
    styledComponents: {
      ssr: true,
      displayName: true,
      
    }
  },
  experimental: {
    appDir: true,
    
  },
}

module.exports = nextConfig


