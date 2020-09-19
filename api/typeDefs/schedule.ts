import { gql } from 'apollo-server-fastify'

export const typeDef = gql`
  type Schedule @cacheControl(maxAge: 60) {
    key: String,
    categoryId: String,
    scheduleList: [Match]
  }

  type Match @cacheControl(maxAge: 60) {
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

  type ScheduleList @cacheControl(maxAge: 60) {
    result: [Schedule]
  }
`
