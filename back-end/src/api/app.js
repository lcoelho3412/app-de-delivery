const express = require('express');
const cors = require('cors');

const loginRouter = require('./routes/login.router');
const ErrorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(cors());

app.use(express.json());

app.use(loginRouter);

app.use(ErrorHandler.handle);

module.exports = app;
