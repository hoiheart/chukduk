import dotenv from 'dotenv'
import { ApolloServer } from 'apollo-server-fastify'
import mongoose from 'mongoose'
import fastify, { FastifyInstance } from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'
import { typeDef as commonDef } from '../typeDefs'
import { typeDef as communityDef } from '../typeDefs/community'
import { typeDef as mediaDef } from '../typeDefs/media'
import { query as communityQuery, mutation as communityMutation } from '../resolvers/community'
import { query as mediaQuery, mutation as mediaMutation } from '../resolvers/media'

dotenv.config({ path: '../.env' })

const apollo = new ApolloServer({
  typeDefs: [commonDef, communityDef, mediaDef],
  resolvers: {
    Query: {
      ...communityQuery,
      ...mediaQuery
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
