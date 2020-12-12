const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.get("/notes", (req, res) => {
  const notesFileName = path.join(__dirname, "../public/notes.html");
  res.sendFile(notesFileName);
});
app.get("*", (req, res) => {
  const fileName = path.join(__dirname, "/index.html");
  res.sendFile(fileName);
});

fs.writeFileSync();

module.exports = app;
