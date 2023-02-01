const { Router } = require('express');
const routes = require('./index');

const router = Router();

router.use('/login', routes.login);

router.use('/register', routes.register);

router.use('/products', routes.products);

router.use('/sales', routes.sales);

router.use('/admin', routes.admin);

router.use('/sellers', routes.sellers);

router.use('/seller', routes.seller);

router.use('/customer', routes.customer);

module.exports = router;
