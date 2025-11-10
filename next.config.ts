// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   output: 'export',
//   images: { unoptimized: true },
// };

// export default nextConfig;
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // needed for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
    ],
    // (Alternatively) domains: ['cdn.simpleicons.org'],
  },
};

export default nextConfig;
