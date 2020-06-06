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
  category: string | null,
  lastID: mongoose.Types.ObjectId | null
}

const resolvers = {
  Query: {
    getCommunityList: async (parent, { type, title, bbs, category, lastID }: CommunityArgs, context, info) => {
      const query = {
        $and : [
          { title : title ? { $regex: new RegExp(title, "im") } : {$exists: true} },
          { category : category ? category : {$exists: true} }
        ]
      }

      console.log(query)

      try {
        const result = await community.find(query)
        return result
      } catch (e) {
        console.log(e)
        return e
      }

      /*
      let find = { $and : [ { hidden: { $ne: true } }, { title : { $regex: new RegExp(result.query.query, "i") } }, { views : { $gt: 0 } } ] };

			// case : 카테고리 게시판
			(req.params.category === 'daily') && find.$and.push({ 'date' : { $gt : yesterday, $lte : time } });
			(req.params.category === 'weekly') && find.$and.push({ 'date' : { $gt : week, $lte : time } });
			// case : 더보기
			(req.query.lastItemID) && find.$and.push({ $or: [ 
				{ $and : [ { views: { $eq: parseInt(req.query.lastItemViews) } }, { _id: { $lt: mongo.ObjectId(req.query.lastItemID) } } ] },
				{ views: { $lt: parseInt(req.query.lastItemViews) } }
			] });

			const total = yield collection.find( find ).sort({ views : -1, _id: -1 }).count();
			let items = yield collection.find( find ).sort({ views : -1, _id: -1 }).limit( listSize ).toArray();
      */
      
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
