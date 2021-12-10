// @ts-check
const withBundleStats = require('next-plugin-bundle-stats');

/**
 * @type {import('next/dist/server/config').NextConfig}
 **/
module.exports = withBundleStats({
  outDir: '../.stats',
  baseline: true
})({
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  }
})
