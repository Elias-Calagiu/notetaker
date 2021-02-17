//Dependencies
const express = require("express");
const router = express.Router();
const db = require("../db/db.json")
const path = require("path")

// Get requests
router.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname, "../public/index.html"))
    });
    
    
    router.get("/notes", (req,res)=>{
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    })
    
    module.exports = router;
