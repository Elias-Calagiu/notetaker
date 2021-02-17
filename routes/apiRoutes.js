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

            let id = 0
            for (let i = 0; i < note.length; i++) {
                note[i].id=i++
            }
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: id++
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
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", (err, data) => {
        if(err)
        throw(err)
        let id = 0
            for (let i = 0; i < note.length; i++) {
                note[i].id=i++
            }
        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(note), err => {
            if (err)
                throw (err)
            res.json(note)
        })
    })
})
module.exports = router;
