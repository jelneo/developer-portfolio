/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
};

export default nextConfig;


module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
};