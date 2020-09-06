import { gql } from 'apollo-server-fastify'

export const typeDef = gql`
  type Schedule {
    key: String,
    categoryId: String,
    scheduleList: [Match]
  }

  type Match {
    homeTeamShortName: String
    homeTeamScore: Int,
    statusInfo: String,
    gameDateTime: String,
    awayTeamShortName: String,
    awayTeamScore: Int
  }

  type ScheduleList {
    result: [Schedule]
  }
`
