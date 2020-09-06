module.exports = {
  async rewrites () {
    return [
      {
        source: '/api/graphql',
        destination: process.env.API_HOST || ''
      }
    ]
  },
  exportPathMap: async function () {
    return {
      '/': { page: '/community' }
    }
  }
}
