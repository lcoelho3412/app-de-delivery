const express = require('express');
require('express-async-errors');
const cors = require('cors');
const router = require('./routes');
const httpErrorMiddleware = require('./middlewares/http.error.middleware');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/login', router.login);

app.use('/register', router.register);

app.use(httpErrorMiddleware);

module.exports = app;
