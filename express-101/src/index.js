const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("Hey, I am server response");
});

app.get("/movies/:title", (req, res) => {
  const { title } = req.params;
  return res.send(`My favourite movie is ${title}`);
});

app.listen(3000, () => console.log(`Example app listening on port 3000!`));

module.exports = app;
