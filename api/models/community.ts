import mongoose, { Schema, Document } from 'mongoose'

const community = mongoose.model<Document>('community', new Schema({
  bbs: String,
  no: String,
  url: String,
  category: String,
  title: String,
  date: Date,
  views: Number,
  hasMovie: Boolean,
  hasImage: Boolean
}), 'community')

export { community }
