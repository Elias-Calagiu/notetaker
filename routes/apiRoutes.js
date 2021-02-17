const express = require("express");
const fs = require("fs");
const router = express.Router();
const path = require("path")
const db = require("../db/db.json")


router.get("/api/notes", (req,res)=>{
fs.readFile("db/db.json", "utf-8", (err,data)=>{
    if(err)
    throw(err)
    res.json(JSON.parse(data))
})
})

router.post("/api/notes", (req,res)=>{
    fs.readFile("db/db.json", "utf-8", (err,data)=>{
        if(err)
        throw(err)
        res.json(JSON.parse(data))
    })
})

module.exports = router;
