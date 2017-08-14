
const express = require('express');
const compress = require('compression');
const bodyParser = require('body-parser');
const routes = require('./routes');
const morgan = require('morgan');
const logger = require('./commons/logger');

const app = express();
morgan.token('reqbody', req => JSON.stringify(req.body));
app.use(morgan(':method :url :reqbody - :status', { stream: logger.stream }));
app.use(compress());
app.use(bodyParser.json());
app.use(routes);

module.exports = app;
