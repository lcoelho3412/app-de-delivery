const { Router } = require('express');
const controller = require('../controllers');

const router = Router();

router.post('/', controller.sales.create);

module.exports = router;
