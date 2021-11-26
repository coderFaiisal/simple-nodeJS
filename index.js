const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world. This is me");
});

app.get("/fruits/banana", (req, res) => {
  res.send({ fruits: "banana", Price: 10 });
});

const users = ["Asad", "Sobuj", "Ali", "Ashiq", "Abdul"];
app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const name = users[id];
  res.send({ id, name });
});

app.post("/addUser", (req, res) => {
  const user = req.body;
  user.id = 55;
  res.send(user);
});

app.listen(3000, () => console.log("listening to port 3000"));
