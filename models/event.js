const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  subtitle: { type: String },
  description: { type: String, trim: true },
  date: { type: String, required: true },
  time: { type: String },
  longitude: { type: Number },
  latitude: { type: Number },
  directions: { type: String },
  image: { type: Buffer },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

eventSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Event', eventSchema)