import mongoose, { Schema, Document } from 'mongoose'
import { gql } from 'apollo-server-fastify'
import dayjs from 'dayjs'

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
    getCommunityList(type: String, title: String, bbs: String, category: String, lastID: ID): [Community],
    getMediaList: [Media]
  }
`

const community = mongoose.model<Document>('community', new Schema({
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
}), 'community')

const media = mongoose.model<Document>('media', new Schema({
  no: Number,
  category: String,
  url: String,
  title: String,
  date: Date,
  thumb: String,
  views: Number
}), 'media')

const page_size = 20
const now = new Date(dayjs().format('YYYY-MM-DD HH:mm'))
const yesterday = new Date(dayjs(now).add(-1, 'day').format('YYYY-MM-DD HH:mm'))
const week = new Date(dayjs(now).add(-7, 'day').format('YYYY-MM-DD HH:mm'))

interface CommunityArgs {
  type: 'daily' | 'weekly' | null,
  title: string | null,
  bbs: string | null,
  category: string | null,
  lastID: mongoose.Types.ObjectId | null
}

const resolvers = {
  Query: {
    getCommunityList: async (parent, { type, title, bbs, category, lastID }: CommunityArgs) => {
      const query = {
        $and : [
          { _id: lastID ? { $lt: lastID } : { $exists: true } },
          { title : title ? { $regex: new RegExp(title, "im") } : { $exists: true } },
          { bbs : bbs ? bbs : { $exists: true } },
          { category : category ? category : { $exists: true } },
          { date : type ? { $gt : type === 'daily' ? yesterday : week } : { $exists: true } },
          { views: type ? { $gt : 0 } : { $exists: true } }
        ]
      }

      try {
        const result = await community.find(query).sort(type ? { views: -1, _id: -1 } : { _id: -1 }).limit( page_size )
        return result
      } catch (e) {
        console.log(e)
        return e
      }
    },
    getMediaList: async () => {
      const result = await media.find()
      return result
    }
  }
}

module.exports = {
  typeDefs,
  resolvers
}
