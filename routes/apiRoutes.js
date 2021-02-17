// const { equal } = require("assert");
const express = require("express");
const fs = require("fs");
const router = express.Router();
const path = require("path")
const db = require("../db/db.json")


router.get("/api/notes", (req, res) => {
    fs.readFile("db/db.json", "utf-8", (err, data) => {
        if (err)
            throw (err)
        res.json(JSON.parse(data))
    })
})

router.post("/api/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", (err, data) => {
        let note= JSON.parse(data)
        if (err)
            throw (err)
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: parseInt(req.params.id)
        }
        note.push(newNote);
        console.log(newNote);

        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(note), err => {
            if (err)
                throw (err)
            res.json(note)
        })
    })
})

router.delete("/api/notes:id", (req,res)=>{

})
module.exports = router;
