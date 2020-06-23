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
