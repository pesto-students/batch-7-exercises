const bodyParser = require('body-parser');
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');

// requiring routes middleware
const languageRoutes = require('../router');

const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(express.static('public'));

app.use('/languages', languageRoutes);

app.get('/', (req, res) => {
  return res.redirect('/languages');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});


