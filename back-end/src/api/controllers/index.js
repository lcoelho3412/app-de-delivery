const user = require('./user.controller');
const products = require('./products.controller');
const sales = require('./sales.controller');
const admin = require('./admin.controller');
const seller = require('./seller.controller');
const customer = require('./customer.controller');

module.exports = {
  user,
  products,
  sales,
  admin,
  seller,
  customer,
};
