import mongoose, { Schema, Document } from 'mongoose'

const media = mongoose.model<Document>('media', new Schema({
  no: Number,
  category: String,
  url: String,
  title: String,
  date: Date,
  thumb: String,
  views: Number
}), 'media')

export { media }
