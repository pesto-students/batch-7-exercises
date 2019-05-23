const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  return res.redirect("/form-with-get");
});

app.get("/form-with-get", (req, res) => {
  return res.render("form-with-get");
});

app.get("/form-with-post", (req, res) => {
  return res.render("form-with-post");
});

app.get("/submit-form-with-get", (req, res) => {
  const { first, last } = req.query;
  return res.send({ first, last });
});

app.post("/submit-form-with-post", (req, res) => {
  const { first, last } = req.body;
  return res.send({ first, last });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
