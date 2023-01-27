const { Sale } = require('../../database/models');

const checkout = async (body) => {
  const purchasedItems = await Sale.create(body);

  return purchasedItems;
};

module.exports = { checkout };
