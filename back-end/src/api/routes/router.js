const { Router } = require('express');
const loginRouter = require('./login.routes');
const registerRouter = require('./register.routes');
const productRouter = require('./products.routes');

const router = Router();

router.use('/login', loginRouter);
router.use('/register', registerRouter);
router.use('/products', productRouter);

module.exports = router;
