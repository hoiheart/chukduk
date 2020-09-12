import { gql } from 'apollo-server-fastify'

export const typeDef = gql`
  type Schedule {
    key: String,
    categoryId: String,
    scheduleList: [Match]
  }

  type Match {
    awayTeamScore: Int,
    awayTeamShortName: String,
    categoryId: String,
    gameDateTime: String,
    gameId: String,
    homeTeamScore: Int,
    homeTeamShortName: String
    statusInfo: String,
    teamScheduleUrl: String,
    upperCategoryId: String
  }

  type ScheduleList {
    result: [Schedule]
  }
`
