const express = require('express');

const app = express();

const languages = ['JavaScript', 'Haskell', 'Python'];

app.get('/', (req, res) => {
  return res.render('../views/index.ejs', { languages });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
