module.exports = {
  async rewrites () {
    return [
      {
        source: '/api/graphql',
        destination: 'http://localhost:3001'
      }
    ]
  },
  webpack (config, options) {
    config.module.rules.push({
      test: /\.graphql$/,
      exclude: /node_modules/,
      use: [options.defaultLoaders.babel, { loader: 'graphql-let/loader' }]
    })

    config.module.rules.push({
      test: /\.graphqls$/,
      exclude: /node_modules/,
      use: ['graphql-tag/loader', 'graphql-let/schema/loader']
    })

    return config
  }
}
