const express = require("express");
const fs = require("fs");
const path = require("path");


const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")); 

const db = require("./db/db.json");

const apiRoutes= require("./routes/apiRoutes.js")
app.use(apiRoutes);

const htmlRoutes= require("./routes/htmlRoutes.js")
app.use(htmlRoutes);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

  