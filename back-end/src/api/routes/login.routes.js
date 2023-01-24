const { Router } = require('express');
const controller = require('../controllers/login.controller');

const router = Router();

router.post('/login', controller.login);

module.exports = router;
