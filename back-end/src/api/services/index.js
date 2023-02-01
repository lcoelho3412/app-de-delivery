const user = require('./user.service');
const products = require('./products.service');
const sales = require('./sales.service');
const admin = require('./admin.service');
const seller = require('./seller.service');
const customer = require('./customer.service');

module.exports = {
  user,
  products,
  sales,
  admin,
  seller,
  customer,
};
