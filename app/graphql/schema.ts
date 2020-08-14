import { makeExecutableSchema } from 'graphql-tools'
import typeDefs from 'typeDefs.graphqls'
import { resolvers } from './resolvers'

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
