const { Router } = require('express');
const controller = require('../controllers');

const router = Router();

router.post('/', controller.user.login);

module.exports = router;
