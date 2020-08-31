const path = require('path')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

module.exports = withSass(withCSS({
  async rewrites () {
    return [
      {
        source: '/api/graphql',
        destination: 'http://localhost:3001'
      }
    ]
  },
  exportPathMap: async function () {
    return {
      '/': { page: '/community' }
    }
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'scss')]
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd-mobile\/.*?\/style.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals)
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader'
      })
    }
    return config
  }
}))
