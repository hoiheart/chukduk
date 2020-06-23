import { gql } from 'apollo-server-fastify'

export const typeDef = gql`
  type Media {
    id: ID!,
    no: String!,
    category: String!,
    url: String!,
    title: String!,
    date: Date!,
    thumb: String!,
    views: Int!
  }

  input CreateMedia {
    no: String!,
    url: String!,
    category: String!,
    title: String!,
    thumb: String!
  }

  input ViewMedia {
    no: String!
  }
`
