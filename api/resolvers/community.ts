import type mongoose from 'mongoose'
import { community } from '../models/community'
import dayjs from 'dayjs'

interface CommunityArgs {
  type: 'daily' | 'weekly' | null,
  title: string | null,
  bbs: string | null,
  category: string | null,
  lastID: mongoose.Types.ObjectId | null
}

export const query = {
  async getCommunityList(parent, { type, title, bbs, category, lastID }: CommunityArgs) {
    const page_size = 20
    const now = new Date(dayjs().format('YYYY-MM-DD HH:mm'))
    const yesterday = new Date(dayjs(now).add(-1, 'day').format('YYYY-MM-DD HH:mm'))
    const week = new Date(dayjs(now).add(-7, 'day').format('YYYY-MM-DD HH:mm'))

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
  }
}

export const mutation = {
  /*
  async createCommunity(root, { data }) {
    try {
      let counts = 0
      for (let i = 0; i < data.length; i++) {
        const item = data[i]
        const result = await community.updateOne({
          bbs: item.bbs,
          no: item.no
        }, {
          $setOnInsert: {
            bbs: item.bbs,
            category: item.category,
            no: item.no,
            url: item.url,
            title: item.title,
            hasImage: item.hasImage || false,
            hasMovie: item.hasMovie || false,
            date: new Date(),
            views: 0
          }
        }, {
          upsert: true
        })
        if (result.upserted) counts++
      }
      return {
        success: true,
        inserted: counts
      }
    } catch (e) {
      console.log(e)
      return e
    }
  },
  */
  async viewCommunity(root, { data }) {
    try {
      const query = { bbs: data.bbs, no: data.no }
      await community.updateOne(query, {
        $inc: { views: 1 }
      })
      const result = await community.findOne(query)
      return result
    } catch (e) {
      console.log(e)
      return e
    }
  }
}
