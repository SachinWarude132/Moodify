const express = require("express");
const cookieparser = require("cookie-parser")
const app = express()
const Authrouter = require("../src/routes/auth.routes")
const cors = require("cors");
const songrouter = require("./routes/song.routes");

app.use(express.json())
app.use(cookieparser())
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));


app.use("/api/auth",Authrouter)
app.use("/api/song",songrouter)

 

module.exports= app

 