const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/developer-portfolio/' : '',
  images: {
    unoptimized: true,
    domains: ['avatars.githubusercontent.com'],
  },
};
