const { Router } = require('express');
const controller = require('../controllers/products.controller');

const router = Router();

router.get('/', controller.getAll);

module.exports = router;
