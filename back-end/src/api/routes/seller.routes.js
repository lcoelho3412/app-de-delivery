const express = require('express');
const controller = require('../controllers');

const router = express.Router();

router.get('/orders', controller.seller.getOrdersBySeller);

router.get('/orders/:id', controller.seller.ordersBySaleId);

router.patch('/orders/:id', controller.seller.updateStatus);

module.exports = router;
