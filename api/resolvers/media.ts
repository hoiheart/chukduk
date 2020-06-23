import type mongoose from 'mongoose'
import { media } from '../models/media'

interface MediaArgs {
  title: string | null,
  category: string | null,
  lastID: mongoose.Types.ObjectId | null
}

export const query = {
  async getMediaList(parent, { title, category, lastID }: MediaArgs) {
    const page_size = 10

    const query = {
      $and : [
        { _id: lastID ? { $lt: lastID } : { $exists: true } },
        { title : title ? { $regex: new RegExp(title, "im") } : { $exists: true } },
        { category : category ? category : { $exists: true } }
      ]
    }

    try {
      const result = await media.find(query).sort({ _id: -1 }).limit( page_size )
      return result
    } catch (e) {
      console.log(e)
      return e
    }
  }
}

export const mutation = {
  async createMedia(root, { data }) {
    try {
      let counts = 0
      for (let i = 0; i < data.length; i++) {
        const item = data[i]
        const result = await media.updateOne({ no: item.no }, {
          $setOnInsert: {
            category: item.category,
            no: item.no,
            url: item.url,
            title: item.title,
            thumb: item.thumb,
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
  async viewMedia(root, { data }) {
    try {
      const query = { no: data.no }
      await media.updateOne(query, {
        $inc: { views: 1 }
      })
      const result = await media.findOne(query)
      return result
    } catch (e) {
      console.log(e)
      return e
    }
  }
}

