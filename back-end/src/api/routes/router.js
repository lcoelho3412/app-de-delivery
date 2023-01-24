const { Router } = require('express');
const loginRouter = require('./login.router');
const registerRouter = require('./register.router');
const productRouter = require('./product.route');

const router = Router();

router.use('/login', loginRouter);
router.use('/register', registerRouter);
router.use('/products', productRouter);

module.exports = router;
