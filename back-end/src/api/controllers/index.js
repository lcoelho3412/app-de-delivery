const login = require('./login.controller');
const register = require('./register.controller');
const products = require('./products.controller');
const sales = require('./sales.controller');
const admin = require('./admin.controller');

module.exports = {
  login,
  register,
  products,
  sales,
  admin,
};
