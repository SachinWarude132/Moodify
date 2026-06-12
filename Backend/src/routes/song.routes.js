const express = require("express")
const songcontroller = require("../controllers/song.controller")
const songrouter = express.Router()
const upload = require("../middleware/upload.middleware")


songrouter.post("/" ,upload.single("song"),songcontroller.uploadSong)
songrouter.get("/" ,songcontroller.getSong)

module.exports = songrouter 