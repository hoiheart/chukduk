const env = require('dotenv').config({ path: '../.env' }).parsed
const { ApolloServer } = require('apollo-server-fastify')
const { typeDefs, resolvers } = require('./graphql/schema')
const mongoose = require('mongoose')

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const fastify = require('fastify')()

fastify.register(server.createHandler({
  path: '/',
  cors: true
}))


// docker 환경은 image 이름으로 사용
// https://stackoverflow.com/questions/49095032/cant-connect-to-mongo-docker-image-with-mongoose
const host = (process.env.RUN_IN_DOCKER) ? 'mongo' : 'localhost'
mongoose.connect(`mongodb://${env.MONGODB_USER}:${env.MONGODB_PASS}@${host}:27017/${env.MONGODB_DATABASE}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
  () => console.log('connected'),
  err => console.log(err)
)

const start = async () => {
  try {
    // docker 환경은 0.0.0.0 으로 사용
    // https://www.fastify.io/docs/latest/Getting-Started/#your-first-server
    await fastify.listen(3001, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start(fastify)
