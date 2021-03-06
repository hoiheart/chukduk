/* eslint-disable no-unused-vars */
import dotenv from 'dotenv'
import { ApolloServer } from 'apollo-server-fastify'
import responseCachePlugin from 'apollo-server-plugin-response-cache'
import mongoose from 'mongoose'
import fastify, { FastifyInstance } from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'
import { typeDef as commonDef } from './typeDefs'
import { typeDef as communityDef } from './typeDefs/community'
import { typeDef as mediaDef } from './typeDefs/media'
import { typeDef as scheduleDef } from './typeDefs/schedule'
import { query as communityQuery, mutation as communityMutation } from './resolvers/community'
import { query as mediaQuery, mutation as mediaMutation } from './resolvers/media'
import { query as scheduleQuery } from './resolvers/schedule'

dotenv.config()

const apollo = new ApolloServer({
  plugins: [responseCachePlugin()],
  typeDefs: [commonDef, communityDef, mediaDef, scheduleDef],
  resolvers: {
    Query: {
      ...communityQuery,
      ...mediaQuery,
      ...scheduleQuery
    },
    Mutation: {
      ...communityMutation,
      ...mediaMutation
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

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.0at2r.gcp.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`, {
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
