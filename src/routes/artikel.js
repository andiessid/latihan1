const express = require("express");
const { artikelVar, artikelPost } = require("../controllers/artikel");

const router = express.Router()

router.get("/artikels",artikelVar) 

router.post("/artikel",artikelPost)

module.exports = router

