const express = require("express");
const dotenv = require("dotenv")
const { connectDb } = require("./config/db.connection");

const urlRoutes = require("./routes/url.routes")
const visitorRoutes = require("./routes/visitor.routes")

const server = express();
dotenv.config()

connectDb();


server.use(express.json())
server.use(urlRoutes.router);
server.use(visitorRoutes.router);

server.listen(3000, () =>{
    console.log("Server Is Running")
})