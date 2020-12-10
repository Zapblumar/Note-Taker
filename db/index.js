const express = require(express);

const app = express();
const PORT = 2020;

app.get("/", (req, res) => {
  res.send("I have a start");
});
