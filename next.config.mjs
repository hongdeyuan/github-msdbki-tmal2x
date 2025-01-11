/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 3600,
  },
  poweredByHeader: false,
  skipMiddlewareUrlNormalize: true,
};

export default nextConfig;
