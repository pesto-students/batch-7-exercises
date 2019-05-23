const express = require('express');
const app = express();

const languages = ['Java', 'JavaScript', 'Haskel', 'Python', 'c'];
const packages = ['Express', 'nodemon', 'body-parser', 'restler', 'cookie-parser']

const port = 3000;

const middleware = (req, res, next) => {
  const headerValue = req.path.slice(1); // removing '/' from path
  res.set('middleware-header', headerValue);
  next();
}

app.get('/', (req, res) => res.send('Hello'));

app.get('/languages', middleware, (req, res) => res.send(JSON.stringify(languages)));
app.get('/packages', middleware, (req, res) => res.send(JSON.stringify(packages)));
app.listen(port);