const express = require("express");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

const saltRounds = 12;

const app = express();
let tokens = [];

function isAuthenticated(req, res, next) {
  const token = req.headers[`authorization`];
  if (!token) {
    return res.status(401).send("Not authenticated");
  }
  bcrypt.compare("secretString", token, (err, result) => {
    if (err) {
      res.status(503).send();
    }
    if (!result) {
      console.log('secret string does not match')
      return res.status(401).send("Invalid token");
    }
    next();
  });
}

app.use(bodyParser.json());

app.get("/", isAuthenticated, (req, res) => {
  const favouriteMovies = ["The Godfather", "The Prestige"];
  return res.send({ favouriteMovies });
});

app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  // Worst secret string ever!
  bcrypt.hash("secretString", saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
      res.status(503).send();
    }
    tokens.push({ username, token: hash });
    res.send({ token: hash });
  });
});

app.listen(8000);
