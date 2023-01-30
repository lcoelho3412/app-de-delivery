const { Router } = require('express');
const controller = require('../controllers');

const router = Router();

router.post('/manage', controller.admin.createUser);
router.get('/manage', controller.admin.findAll);
router.delete('/manage/:id', controller.admin.remove);

module.exports = router;
