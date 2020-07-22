const mongoose = require('mongoose')

const emailSchema = new mongoose.Schema({
  to: [{ type: String, required: true }],
  from: { type: String, required: true, trim: true },
  subject: { type: String, required: true },
  text: { type: String, required: true }
})

module.exports = mongoose.model('Email', emailSchema)