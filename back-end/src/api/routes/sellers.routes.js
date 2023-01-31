const express = require('express');
const controller = require('../controllers');

const router = express.Router();

router.get('/', controller.user.getSellers);

router.get('/:id', controller.user.getSellers);

module.exports = router;