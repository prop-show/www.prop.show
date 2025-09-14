import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'bitmc.uno', port: '', pathname: '/picgo/**', }
    ]
  },

  experimental: {
    optimizePackageImports: ['lucide-react', '@tabler/icons-react'],
  },

  trailingSlash: true,

  // 安全头部
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
    ]
  },
};

export default nextConfig;
