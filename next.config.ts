import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // Contentlayer integration
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  
  // Optimize file watching for Windows
  webpack: (config, { isServer }) => {
    // Reduce file watching overhead on Windows
    if (!isServer) {
      config.watchOptions = {
        poll: false, // Disable polling - use native file watching
        ignored: [
          '**/node_modules/**',
          '**/.git/**',
          '**/.next/**',
          '**/.contentlayer/**',
          '**/dist/**',
          '**/build/**',
          '**/*.log',
          '**/.DS_Store',
        ],
        aggregateTimeout: 300, // Wait 300ms before rebuilding
      };
    }
    return config;
  },
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Security Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // DNS Prefetch Control
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          // HSTS - Force HTTPS
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          // Prevent clickjacking
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          // Prevent MIME sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          // XSS Protection (legacy browsers)
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          // Referrer Policy
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          // Permissions Policy (disable unwanted features)
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          },
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' data:",
              "connect-src 'self' https://www.google-analytics.com",
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "form-action 'self'"
            ].join('; ')
          }
        ]
      }
    ]
  },

  // Redirects (if needed)
  async redirects() {
    return [
      // ===== WORDPRESS → NEXT.JS REDIRECTS =====

      // 1. Nephilim
      {
        source: '/the-nephilim-ancient-giants-in-biblical-lore',
        destination: '/nephilim-giants-bible-meaning',
        permanent: true,
      },

      // 2. Goliath
      {
        source: '/was-goliath-more-than-a-giant-unpacking-his-role-in-davids-story',
        destination: '/goliath-giants-spiritual-warfare',
        permanent: true,
      },

      // 3. Water Dreams
      {
        source: '/dreams-of-water-in-the-bible-from-noah-to-revelation',
        destination: '/water-dreams-biblical-meaning',
        permanent: true,
      },

      // 4. Number 12
      {
        source: '/the-number-12-in-the-bible-tribes-apostles-and-gods-blueprint',
        destination: '/the-hidden-power-of-12-in-the-bible-a-personal-journey-of-discovery',
        permanent: true,
      },

      // Note: KEEPING Number 7 article - it has impressions/clicks
      // Will upgrade to comprehensive version later
    ]
  }
};

export default withContentlayer(nextConfig);
