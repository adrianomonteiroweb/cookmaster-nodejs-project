const express = require('express');

const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const router = require('../routes');
const error = require('../middlewares/error');

app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, '..', 'uploads')));
app.use(express.json());
app.use(router);
app.use(error);

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

module.exports = app;
