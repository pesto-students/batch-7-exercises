const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Hey, I am server response');
});

app.get('/movie/:title', (request, response) => {
  response.send(`My favorite movie is ${request.params.title}`);
});

app.listen(3000);

module.exports = app;
