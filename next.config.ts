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
};

export default nextConfig;
