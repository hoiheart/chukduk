const mongoose = require('mongoose')
const { gql } = require('apollo-server-fastify')

const typeDefs = gql`
  scalar Date

  type Community {
    id: ID!,
    bbs: String!,
    no: Int!,
    url: String!,
    category: String!,
    title: String!,
    author: String!,
    date: Date!,
    views: Int!,
    hasMovie: Boolean!,
    hasImage: Boolean!
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
    community: [Community],
    media: [Media]
  }
`

const community = mongoose.model('community', {
  bbs: String,
  no: Number,
  url: String,
  category: String,
  title: String,
  author: String,
  date: Date,
  views: Number,
  hasMovie: Boolean,
  hasImage: Boolean
}, 'community')

const media = mongoose.model('media', {
  no: Number,
  category: String,
  url: String,
  title: String,
  date: Date,
  thumb: String,
  views: Number
}, 'media')

const resolvers = {
  Query: {
    community: async () => {
      const result = await community.find()
      return result
    },
    media: async () => {
      const result = await media.find()
      return result
    }
  }
}

module.exports = {
  typeDefs,
  resolvers
}
