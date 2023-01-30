const { Router } = require('express');
const controller = require('../controllers');

const router = Router();

router.get('/', controller.admin.findAll);

router.delete('/:id', controller.admin.remove);

module.exports = router;
