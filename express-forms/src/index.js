const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.redirect('/form-with-get'));

app.get('/form-with-get', (req, res) => res.render('form-with-get'));

app.get('/form-with-post', (req, res) => res.render('form-with-post'));

app.get('/submit-form-with-get', (req, res) => {
  res.send({ firstName: req.query.first, lastName: req.query.last });
});

app.post('/submit-form-with-post', (req, res) => {
  res.send({ firstName: req.body.first, lastName: req.body.last });
});

app.listen(3001, () => {
  console.log('Server is listening on port 3001');
});
