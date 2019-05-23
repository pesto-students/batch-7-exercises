const express = require('express');

const app = express();

const languages = ['Javascript', 'Python', 'Brainfuck', 'Haskell', 'Scala'];
const npmPackages = ['Express', 'Mocha', 'Lodash', 'Passport', 'Axios'];

const routeHeader = (req, res, next) => {
  const endpoint = req.path.toString();
  req.headers['middleware-header'] = endpoint.substring(1);
  next();
};

app.use(routeHeader);

app.get('/', (req, res) => {
  console.log(`middleware-header=${req.headers['middleware-header']}`);
  res.send('Hello');
});

app.get('/languages', (req, res) => {
  console.log(`middleware-header=${req.headers['middleware-header']}`);
  res.send({ languages });
});

app.get('/packages', (req, res) => {
  console.log(`middleware-header=${req.headers['middleware-header']}`);
  res.send({ npmPackages });
});

app.listen(3000);
