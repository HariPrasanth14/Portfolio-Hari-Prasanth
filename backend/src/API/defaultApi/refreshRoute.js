const { refreshRender } = require("./refresh")
const refreshRoute = require("express").Router()

refreshRoute.get("/backend-start",refreshRender)

module.exports = refreshRoute

