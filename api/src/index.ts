import dotenv from 'dotenv'
import { ApolloServer } from 'apollo-server-fastify'
import mongoose from 'mongoose'
import fastify, { FastifyInstance } from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'
import { typeDef as commonDef } from '../typeDefs'
import { typeDef as communityDef } from '../typeDefs/community'
import { typeDef as mediaDef } from '../typeDefs/media'
import { query as communityQuery, mutation as communityMutation } from '../resolvers/community'
import { query as mediaQuery } from '../resolvers/media'

dotenv.config({ path: '../.env' })

const apollo = new ApolloServer({
  typeDefs: [commonDef, communityDef, mediaDef],
  resolvers: {
    Query: {
      ...communityQuery,
      ...mediaQuery
    },
    Mutation: {
      ...communityMutation
    }
  }
})

const server: FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify()

server.register(apollo.createHandler({
  path: '/',
  cors: true
}))


// docker 환경은 image 이름으로 사용
// https://stackoverflow.com/questions/49095032/cant-connect-to-mongo-docker-image-with-mongoose
const host = (process.env.RUN_IN_DOCKER) ? 'mongo' : 'localhost'
mongoose.connect(`mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${host}:27017/${process.env.MONGODB_DATABASE}`, {
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
    await server.listen(3001, '0.0.0.0')
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start() 
