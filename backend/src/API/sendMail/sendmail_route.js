const { sendMail } = require("./sendmail_contoller")
const express = require("express")
const mailRouter = express.Router()

mailRouter.post("/send-mail",sendMail)

module.exports = { mailRouter }




