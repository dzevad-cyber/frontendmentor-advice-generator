/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
    basePath: '/next-pages',
    assetPrefix: '/next-pages',
  },
};

module.exports = nextConfig;
