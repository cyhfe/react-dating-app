const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const path = require("path")
const morgan = require("morgan")

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.static(path.resolve(__dirname, "..", "public")))

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public/index.html"))
})

async function start() {
  await mongoose.connect(MONGO_URL)
  console.log("connected to database")
  app.listen(PORT, () => {
    console.log("server running in " + PORT)
  })
}

start()

module.exports = app
