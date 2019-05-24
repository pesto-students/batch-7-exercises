const express = require('express');
const routes = require('../routes');

const app = express();
const PORT = 8080;

app.use(express.json());

app.use('/projects', routes);
app.get('/', (_, res) => res.redirect('/projects'));
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
