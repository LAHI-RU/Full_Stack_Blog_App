const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  res.json({ requestdata: { username, password } });
});

app.listen(4000);

//mongodb+srv://Mern-Blog:7yJdz0gNTpjjkSrG@cluster0.ucbln.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//7yJdz0gNTpjjkSrG
