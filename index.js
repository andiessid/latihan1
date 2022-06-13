const express = require("express");

const app = express();
const port = 4000;

const artikelRouter = require("./src/routes/artikel")
const bodyParser = require("body-parser")

app.use(bodyParser.json())

// Untuk handle privacy policy
app.use("/", (req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Method', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Header', 'Content-Type, Authorization');
    next();
})

app.use("/v1", artikelRouter)

app.listen(port, ()=> {
    console.log("now server is on...!!!")
    console.log("andis server")
})