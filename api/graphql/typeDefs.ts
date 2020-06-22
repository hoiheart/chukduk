import { gql } from 'apollo-server-fastify'

export const typeDefs = gql`
  scalar Date

  type Community {
    id: ID!,
    bbs: String!,
    no: Int!,
    url: String!,
    category: String!,
    title: String!,
    date: Date!,
    views: Int!,
    hasMovie: Boolean,
    hasImage: Boolean
  }

  type Media {
    id: ID!,
    no: Int!,
    category: String!,
    url: String!,
    title: String!,
    date: Date!,
    thumb: String!,
    views: Int!
  }

  type Query {
    getCommunityList(type: String, title: String, bbs: String, category: String, lastID: ID): [Community],
    getMediaList(title: String, category: String, lastID: ID): [Media]
  }

  type Mutation {
    insertCommunity(data: CommunityData): [Community]
  }
`
