const express = require('express');
const cors = require('cors');
const router = require('./routes');

const ErrorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/login', router.login);

app.use('/register', router.register);

app.use(ErrorHandler.handle);

module.exports = app;
