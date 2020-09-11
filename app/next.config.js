module.exports = {
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
