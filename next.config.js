/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/frontendmentor-advice-generator',
  assetPrefix: '/frontendmentor-advice-generator',
};

module.exports = nextConfig;
