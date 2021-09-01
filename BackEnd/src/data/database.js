// require('dotenv').config()
const mongoose = require('mongoose')

const connect = () => {mongoose.connect(
  'mongodb://localhost:27017/to-do-list', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}) 
  .then(console.log(`Database to-do list conectada com sucesso.`))
  .catch(err => console.err)
}

module.exports = { connect }