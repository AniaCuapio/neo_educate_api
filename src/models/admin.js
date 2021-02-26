
const mongoose = require('mongoose')
const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    require: true,
    match: /^.+@.+\..+$/,
  },
  memberSince: {
    type: Date,
  },
})

module.exports = mongoose.model('admin', adminSchema)