import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Using App Router with dynamic locale routing instead of old i18n config
  images: {
    // Allow all local images
    unoptimized: true,
    // Remove restrictive patterns that might block local images
    remotePatterns: [],
    // Ensure local images work
    domains: [],
  },
  
  // SEO and Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Headers for better SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/',
        destination: '/fa',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
