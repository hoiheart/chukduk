const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? 'https://chukduk.net' : '',
  async rewrites () {
    return [
      {
        source: '/',
        destination: '/community'
      },
      {
        source: '/api/graphql',
        destination: process.env.API_HOST || 'http://localhost:3001'
      }
    ]
  }
}
