const express = require('express');
const loginRouter = require('./routes/login.router');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(loginRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(errorHandler);

module.exports = app;
