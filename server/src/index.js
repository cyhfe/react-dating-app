const NODE_ENV = process.env.NODE_ENV || "dev"
require("dotenv").config({ path: `.env.${NODE_ENV}` })

const http = require("http")

const app = require("./app")

http.createServer(app)
