const express = require("express");
const cors = require("cors");
const User = require("./models/User");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://Mern-Blog:7yJdz0gNTpjjkSrG@cluster0.ucbln.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.create({ username, password });
  res.json({ requestdata: { username, password } });
});

app.listen(4000);

//7yJdz0gNTpjjkSrG
