import { gql } from 'apollo-server-fastify'

export const typeDef = gql`
  type Community {
    id: ID!,
    bbs: String!,
    no: String!,
    url: String!,
    category: String!,
    title: String!,
    date: Date!,
    views: Int!,
    hasMovie: Boolean,
    hasImage: Boolean
  }

  input CreateCommunity {
    bbs: String!,
    no: String!,
    url: String!,
    category: String!,
    title: String!
    hasMovie: Boolean,
    hasImage: Boolean
  }

  input ViewCommunity {
    bbs: String!,
    no: String!
  }
`
