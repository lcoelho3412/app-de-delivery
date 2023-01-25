const express = require('express');
const controller = require('../controllers');

const router = express.Router();

router.post('/register', controller.register.createUser);

module.exports = router;