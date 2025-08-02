import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Using App Router with dynamic locale routing instead of old i18n config
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tavan-sanaat.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
