const { Sale, User, Product } = require('../../database/models');

const updateStatus = async (saleId, saleStatus) => {
await Sale.update(
  { status: saleStatus }, 
  { where: { id: saleId } },
  );
const updatedOrder = await Sale.findByPk(saleId, {
    include: [
      { model: User, as: 'seller', attributes: ['name'] },
      { model: Product, as: 'product', attributes: ['id', 'name', 'price'] },
    ],
  });
return updatedOrder;
};

module.exports = {
  updateStatus,
};
