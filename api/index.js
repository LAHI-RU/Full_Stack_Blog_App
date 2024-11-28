const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.post("/regsiter", (req, res) => {
  res.json("test ok3");
});

app.listen(4000);
