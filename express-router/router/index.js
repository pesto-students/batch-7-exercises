const express = require('express');

const router = express.Router();

let languages = [];
let languageIndex = 0;

router.get('/', (req, res) => {
  res.render('index', { languages });
});

router.post('/', (req, res) => {
  const newLanguage = req.body.name;
  languages.push({ id: languageIndex++, name: newLanguage });
  res.redirect('/');
});

router.get('/new', (req, res) => {
  res.render('new');
});

router.get('/:languageid/edit', (req, res) => {
  res.render('edit', { language: languages[req.params.languageid] });
});

router.patch('/:languageid', (req, res) => {
  languages[req.params.languageid].name = req.body.name;
  res.redirect('/');
});

router.delete('/:languageid', (req, res) => {
  const modifiedLanguages = languages.filter(
    language => language.id !== Number.parseInt(req.params.languageid, 10)
  );
  languages = modifiedLanguages.map((language, index) => {
    return {
      ...language,
      id: index
    };
  });
  res.redirect('/');
});

module.exports = router;
