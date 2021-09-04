const express = require("express")
const cors = require("cors")
const db = require("./data/database")

const index = require("./routes/index")
const listasRouter = require("./routes/listasRoutes")

db.connect()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/", index)
app.use("/lista", listasRouter)

module.exports = app