const express = require('express');
const controller = require('../controllers');

const router = express.Router();

router.get('/orders', controller.seller.getOrdersBySeller);

router.get('/orders/:id', controller.seller.ordersBySaleId);

router.put('/orders/:id', controller.seller.ordersBySaleId);

module.exports = router;
