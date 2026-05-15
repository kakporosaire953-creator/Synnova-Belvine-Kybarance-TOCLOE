/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // Enable experimental features for faster navigation
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  images: {
    // Enable image optimization for sharp, clear images
    unoptimized: false,
    // High quality images with optimized sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 85, 90, 95],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache
    remotePatterns: [],
  },
}

export default nextConfig
