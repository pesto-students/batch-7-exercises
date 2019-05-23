const express = require('express');
const { timeNow } = require('../utils');

const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');

app.use((req, res, next) => {
  const { originalUrl } = req;
  console.log(`time:- ${timeNow()}`);
  console.log(`middleware-header=${originalUrl}`);

  res.setHeader('middleware-header', originalUrl);

  next();
});

app.get('/', (req, res) => {
  res.render('../views/index', { data: 'Hello' });
});

const languages = ['JavaScript', 'Java', 'C', 'PHP', 'C#'];
app.get('/languages', (req, res) => {
  res.json({ languages });
});

const npmPackages = ['Express', 'Socket.io', 'Pug', 'Angular', 'React'];
app.get('/packages', (req, res) => {
  res.json({ npmPackages });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
