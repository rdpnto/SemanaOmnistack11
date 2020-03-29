const express = require('express'); //Pacote
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes'); //Arquivo

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;