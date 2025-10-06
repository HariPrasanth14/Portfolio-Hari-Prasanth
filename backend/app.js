const express = require("express")
require("dotenv").config()
const cors = require("cors")
const router = require("./route")
const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 4000

app.use("/", router)



module.exports = { app, port }