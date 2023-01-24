const express = require('express');
const cors = require('cors');

const router = require('./routes/router');
const ErrorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(cors());

app.use(express.json());

app.use(router);

app.use(ErrorHandler.handle);

module.exports = app;
