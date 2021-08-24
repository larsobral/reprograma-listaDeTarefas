const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('list', listSchema)