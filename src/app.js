const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const usersRoute = require('./routes/user.route');
const giftRoute = require('./routes/gift.route');

// Mongo Connection Provider

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/users', usersRoute);
app.use('/gifts', giftRoute);
app.use('/', (req, res, next) => {
  res.status(404).send('Caminho não encontrado');
})

module.exports = app;