const express = require('express');
const loginRouter = require('./routes/login.router');

const app = express();

app.use(loginRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
