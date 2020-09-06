import { gql } from 'apollo-server-fastify'

export const typeDef = gql`
  scalar Date

  type Query {
    getCommunityList(type: String, title: String, bbs: String, category: String, lastID: ID): CommunityList
    getMediaList(title: String, category: String, lastID: ID): MediaList
    getScheduleList(date: String, category: String): ScheduleList
  }

  type CreateResult {
    success: Boolean,
    inserted: Int
  }

  type Mutation {
    # createCommunity(data: [CreateCommunity]): CreateResult
    viewCommunity(id: ID!): Community
    # createMedia(data: [CreateMedia]): CreateResult
    viewMedia(id: ID!): Media
  }
`
