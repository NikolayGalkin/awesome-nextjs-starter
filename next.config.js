// @ts-check
const withBundleStats = require('next-plugin-bundle-stats');

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withBundleStats({
  outDir: '../.stats',
  baseline: true
})({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  }
})
