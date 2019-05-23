const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const config = require('../config');
const { encrypt } = require('../utils');
const { favoriteMovies } = require('../data');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = 8000;
const TokenKey = 'key';

app.set(TokenKey, config.key);

// Middleware to verify token
app.use((req, res, next) => {
  if (req.originalUrl === '/') {
    const authToken = req.get('Authorization');

    // If no auth token found in header
    if (!authToken) res.send('Not authenticated');

    // TODO decrypt token & verify
    jwt.verify(authToken, app.get(TokenKey), (err, decoded) => {
      if (err) res.send('Invalid token');
      req.decodedToken = decoded;
      next();
    });
  } else {
    next();
  }
});

app.get('/', (req, res) => {
  if (req.decodedToken) {
    res.send(favoriteMovies);
  }
});

app.post('/signup', (req, res) => {
  const { username } = req.body;

  const payload = {
    user: username,
  };
  const token = jwt.sign(payload, app.get(TokenKey), { expiresIn: '24h' });
  const encryptedToken = encrypt(token);
  res.json({ token: encryptedToken });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
