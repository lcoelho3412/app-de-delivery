const express = require('express');
const controller = require('../controllers');

const router = express.Router();

router.get('/orders', controller.seller.getOrdersBySeller);

module.exports = router;