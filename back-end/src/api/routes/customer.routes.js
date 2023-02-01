const express = require('express');
const controller = require('../controllers');

const router = express.Router();

// router.get('/orders/:id',);

router.patch('/orders/:id', controller.customer.updateStatus);

module.exports = router;