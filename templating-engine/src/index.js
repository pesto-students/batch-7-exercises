const express = require('express');

const app = express();

const languages = ['JavaScript', 'Haskell', 'Python'];

app.get('/', (req, res) => {
  return res.send(`Hello ${languages[0]}`); // Use res.render() to render the ejs file instead of sending text response
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
