import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://bitmc.uno/picgo/126662463_p2.jpg')]
  },
  // 启用实验性功能
  experimental: {
    // 优化字体加载
    optimizePackageImports: ['lucide-react', '@tabler/icons-react'],
  },
  // 压缩和优化
  compress: true,
  // 生成 sitemap
  // 静态导出优化
  trailingSlash: false,
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
