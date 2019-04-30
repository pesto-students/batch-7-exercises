const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const postsData = require('./postsData');

const app = express();
const PORT = 3001;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.get('/', (req, res) => {
  res.status(200);
  res.send('Hello. What\'s up?');
});

app.get('/posts/:page?', (req, res) => {
  if (req.headers['pesto-password'] !== 'darth vader') {
    res.status(403);
    res.json({ error: { message: 'No pesto-password header present. Hint: password is `darth vader`' } });
  }

  const { page = 1 } = req.params;

  if (page && typeof Number(page) !== 'number') {
    res.status(404);
    res.json({ error: { message: 'Invalid page number' } });
  }

  const startIndex = (page - 1) * 10;
  const endIndex = (page * 10);
  const data = postsData
    .slice(startIndex, endIndex)
    .map(post => ({ id: post.id, title: post.title }));
  res.status(200);
  res.json({ data });
});

app.get('/post/:id?', (req, res) => {
  if (req.headers['pesto-password'] !== 'darth vader') {
    res.status(403);
    res.json({ error: { message: 'No pesto-password header present. Hint: password is `darth vader`' } });
  }
  const { id: postId } = req.params;
  const data = postsData.filter(post => post.id === Number(postId));

  if (!data[0]) {
    res.status(404);
    res.json({ error: { message: `No post found with the id ${postId}` } });
  }
  res.status(200);
  res.json({ data: data[0] });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
