import mongoose, { Schema, Document } from 'mongoose'

const media = mongoose.model<Document>('media', new Schema({
  no: String,
  category: String,
  url: String,
  title: String,
  date: Date,
  thumb: String,
  views: Number
}, { versionKey: false }), 'media')

export { media }
