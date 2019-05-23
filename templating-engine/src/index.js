const express = require('express');

const app = express();

const languages = ['JavaScript', 'Haskell', 'Python'];

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  return res.render('index',{languages}); // Use res.render() to render the ejs file instead of sending text response
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
