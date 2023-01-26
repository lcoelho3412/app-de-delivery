const express = require('express');
require('express-async-errors');
const cors = require('cors');
const path = require('path');
const router = require('./routes/router');
const httpErrorMiddleware = require('./middlewares/http.error.middleware');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/images', express.static(path.resolve('..', 'assets', 'images')));

app.use(router);

app.use(httpErrorMiddleware);

module.exports = app;
