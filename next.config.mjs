/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Optimize image loading
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    // Allow specific external image domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.simplifyingthemarket.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'simplifyingthemarket.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.simplifyingthemarket.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'www.simplifyingthemarket.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'simplifyingthemarket.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.simplifyingthemarket.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '*.simplifyingthemarket.com',
        pathname: '/**',
      },
      // Allow common CDN patterns that might host images
      {
        protocol: 'https',
        hostname: '**.wp.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.wordpress.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
        pathname: '/**',
      },
    ],
    // Allow unoptimized images for external sources that might have issues
    unoptimized: false,
  },
  // Optimize rendering performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  // Enable React compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
};

export default nextConfig;

