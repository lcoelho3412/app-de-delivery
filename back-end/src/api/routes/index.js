const login = require('./login.routes');
const register = require('./register.routes');
const products = require('./products.routes');
const sales = require('./sales.routes');
const admin = require('./admin.routes');
const sellers = require('./sellers.routes');

module.exports = {
  login,
  register,
  products,
  sales,
  admin,
  sellers,
};
