const express = require('express');

const router = express.Router();

// Index page
const languages = [];
let idCounter = 0;
router.get('/', (req, res) => res.render('../views/index', { languages }));

// New page
router.get('/new', (req, res) => res.render('../views/new'));

// POST new language
router.post('/', (req, res) => {
  const newLanguage = {
    id: idCounter,
    name: req.body.name,
  };
  idCounter += 1;
  languages.push(newLanguage);
  res.redirect('/');
});

// Edit Languages
router.get('/:id/edit', (req, res) => {
  try {
    const requestedId = parseInt(req.params.id, 10);
    const language = languages.find(({ id }) => id === requestedId);
    if (!language) {
      throw new Error(`Unknown id: ${requestedId}`);
    }

    res.render('../views/edit', { language });
  } catch (ex) {
    console.log('Found error', ex);
    res.redirect('/');
  }
});

module.exports = router;
