const login = require('./login.router');
const register = require('./register.router');
const products = require('./products.routes')

module.exports = {
  login,
  register,
  products,
};
