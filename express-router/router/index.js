const express = require('express');

const router = express.Router();

const languages = [];
let idCounter = 1;

router.get('/', (req, res) => {
  res.render('index', { languages });
});
router.get('/new', (req, res) => {
  res.render('new');
});
router.post('/', (req, res) => {
  const { name } = req.body;
  languages.push({ name, id: idCounter });
  idCounter += 1;
  res.redirect('/');
});

router.get('/:id/edit', (req, res) => {
  const { id } = req.params;
  const language = languages.filter(language => language.id === parseInt(id, 10));
  return res.render('edit', { language: language[0] });
});

router.patch('/:id', (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  languages.map((language) => {
    if (language.id === parseInt(id, 10)) {
      language.name = name;
    }
    return language;
  });
  res.redirect('/');
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const indexToBeDeleted = languages.findIndex(language => language.id === parseInt(id, 10));
  languages.splice(indexToBeDeleted, 1);
  res.redirect('/');
});
module.exports = router;
