const express = require("express");
const router = express.Router();
const path = require("path")
const db = require("../db/db.json")

router.get("/", (req,res) =>{
res.sendFile(path.join(_dirname, "/public/index.html"))
})

module.exports = router;
