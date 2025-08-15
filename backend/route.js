const express = require("express")
const allRouter = express.Router()

const {mailRouter} = require("./src/controllers/sendmail_route")

allRouter.use("/api",mailRouter)

module.exports = allRouter