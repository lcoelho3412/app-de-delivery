const { Router } = require('express');
const controller = require('../controllers/products.controller');

const router = Router();

router.get('/products', controller.getAll);

module.exports = router;
