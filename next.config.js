const path = require('path')
const { i18n } = require('./i18n.config')

module.exports = {
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: false,
  env: {
  },

  output: 'standalone',
  images: { domains: [''] },
  experimental: {
    esmExternals: false,
    jsconfigPaths: false // enables it for both jsconfig.json and tsconfig.json
  },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision')
    }

    return config
  },
  i18n,
}