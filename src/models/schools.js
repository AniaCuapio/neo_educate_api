
const mongoose = require('mongoose')
const schoolsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  memberSince: {
    type: Date,
  },
  creditCard: {
    type: Number,
    required: true,
    max: 16,
  },
  contactmail: {
    type: String,
    require: true,
    match: /^.+@.+\..+$/,
  },
  paymentPlan: {
    type: String,
    require: true,
    enum: [
      'Essential',
      'Advanced',
      'Premium',
    ],
  },
    users: {
      type: Number,
      required: true,
      max: 16,
    },
  })

module.exports = mongoose.model('schools', schoolsSchema)