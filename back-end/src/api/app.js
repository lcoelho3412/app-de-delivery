const express = require('express');
const loginRouter = require('./routes/login.router');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

app.use(loginRouter);

app.use(errorHandler);

module.exports = app;
