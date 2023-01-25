const { Router } = require('express');
const routes = require('./index');

const router = Router();

router.use('/login', routes.login);

router.use('/register', routes.register);

router.use('/products', routes.products);

module.exports = router;
