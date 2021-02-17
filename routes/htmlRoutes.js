const express = require("express");
const router = express.Router();
const db = require("../db/db.json")



router.get("/", (req,res) =>{
    res.sendFile(path.join(_dirname, "/public/index.html"))
    });
    
    
    router.get("/notes")
    
    module.exports = router;
    

module.exports = router;
