const express = require("express")
const allRouter = express.Router()

const {mailRouter} = require("./src/API/sendMail/sendmail_route")
const refreshRoute = require("./src/API/defaultApi/refreshRoute")

allRouter.use("/api",mailRouter)
allRouter.use('/api',refreshRoute)

module.exports = allRouter