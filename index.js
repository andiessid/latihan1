const express = require("express");

const app = express();
const port = 4000;

app.use("/", (req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Method', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Header', 'Content-Type, Authorization');
    next();
})

app.get("/artikel", (req, res, next) => {
    // res.send("<h1>Hello Dunia Baru..</h1>")
    res.json({
        message : "API success..",
        data : [
            {
                judul_artikel : "Belajar NodeJS",
                Penulis : "Mr. Node",
                Tanggal : "08 Juni 2022",
                isi_artikel : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
        ]
    })
})

app.listen(port, ()=> {
    console.log("now server is on...!!!")
    console.log("andis server")
})