
const express = require('express');
const compress = require('compression');
const bodyParser = require('body-parser');
// const routes = require('./routes');

const app = express();
app.use(compress());
app.use(bodyParser.json());
// app.use(routes);

module.exports = app;
