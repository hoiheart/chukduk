const dotenv = require('dotenv')

dotenv.config({ path: '../.env' })

module.exports = {
  async rewrites () {
    return [
      {
        source: '/',
        destination: '/community'
      },
      {
        source: '/api/graphql',
        destination: process.env.API_HOST
      }
    ]
  }
}
