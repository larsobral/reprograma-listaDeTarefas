require('dotenv').config()
const mongoose = require('mongoose')

const connect = () => {mongoose.connect(process.env, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}) 
  .then(console.log('Database to-do list conectada com sucesso.'))
  .catch(err => console.err)
}

module.exports = { connect }
