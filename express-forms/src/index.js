const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.redirect('/form-with-get');
});

app.get('/form-with-get', (req, res) => {
  return res.render('form-with-get');
});

app.get('/form-with-post', (req, res) => {
  return res.render('form-with-post');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

