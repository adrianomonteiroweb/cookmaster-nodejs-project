const express = require('express');

const app = express();
app.use(express.json());
// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

// routes
const routes = require('../routes');

app.use(routes);

module.exports = app;
