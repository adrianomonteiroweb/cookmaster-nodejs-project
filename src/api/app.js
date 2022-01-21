const express = require('express');
const invalidToken = require('../middlewares/invalidToken');

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
app.use(invalidToken);

module.exports = app;
