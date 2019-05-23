// grab the packages we need
var express = require("express");
var app = express();
var port = process.env.PORT || 8000;

// routes will go here
app.get("/", function(req, res) {
  let t = req.get("Authorization");
  console.log(t);
});
// start the server
app.listen(port);
