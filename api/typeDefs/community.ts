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

  type CommunityList {
    size: Int,
    result: [Community]
  }

  # input CreateCommunity {
  #   bbs: String!,
  #   no: String!,
  #   url: String!,
  #   category: String!,
  #   title: String!
  #   hasMovie: Boolean,
  #   hasImage: Boolean
  # }

  input ViewCommunity {
    id: ID!
  }
`
