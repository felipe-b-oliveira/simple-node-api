const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/routes');

const app = express();
// app.use(cors());
app.use(bodyParser.json());

app.use('/', routes);

app.use((req, res, next) => {
  console.error('Caminho não encontrado', err.message);
  return res.status(err.code || 404).json({ error: err.message });
});

app.use((error, req, res, next) => {
  if(res.headerSent) {
    return next(error);
  }
  console.error('Ocorreu um erro inesperado!', err.message);
  return res.status(err.code || 500).json({ error: err.message });
})

// app.get('/', (req, res) => res.status(404))

module.exports = app;