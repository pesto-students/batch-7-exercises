const express = require('express');

const app = express();

const PORT = 3000;

// Routes

app.get('/', (req, res) => {
  const data = `Hey, I am server response <br />
  <a href="./movie/godfather">Your favorite movie is godfather?</a>`;
  res.send(data);
});

app.get('/movie/:title', (req, res) => {
  res.send(`My favorite movie is ${req.param('title')}`);
});

// Configs
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

module.exports = app;
