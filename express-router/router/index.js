const express = require('express');

const router = express.Router();

const languages = [];
let id = 1;
router.get('/', (req, res) => {
  res.render('./../views/index', { languages });
});
router.get('/new', (req, res) => {
  res.render('./../views/new');
});
router.post('/', (req, res) => {
  languages.push({ name: req.body.name, id });
  id += 1;
  res.redirect('/languages');
});

router.patch('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const language = languages.find((ele) => {
    console.log(ele, id);
    return ele.id === id;
  });
  language.name = req.body.name;
  res.redirect('/languages');
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const language = languages.find((ele) => {
    console.log(ele, id);
    return ele.id === id;
  });
  const indexOfDataTobeDeleetd = languages.indexOf(language);
  languages.splice(indexOfDataTobeDeleetd, 1);
  res.redirect('/languages');
});
router.get('/:id/edit', (req, res) => {
  const id = parseInt(req.params.id);
  let language = languages.find(ele => ele.id === id);
  if (!language) {
    language = { name: '', id: 0 };
  }
  res.render('./../views/edit', { language });
});

module.exports = router;
