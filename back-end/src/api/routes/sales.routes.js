const { Router } = require('express');
const controller = require('../controllers');

const router = Router();

router.post('/', controller.sales.create);

router.get('/', controller.sales.salesByUser);

router.get('/:id', controller.sales.saleById);

module.exports = router;
