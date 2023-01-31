const { Sale, SalesProducts } = require('../../database/models');

const create = async (id, body) => {
  const { soldProducts } = body;

  const sale = await Sale.create({
    userId: id,
    sellerId: body.sellerId,
    totalPrice: body.totalPrice,
    deliveryAddress: body.deliveryAddress,
    deliveryNumber: body.deliveryNumber,
    saleDate: new Date(),
    status: 'pendente',
  });

  soldProducts.forEach(async (product) => {
    await SalesProducts.create({
      saleId: sale.id,
      productId: product.productId,
      quantity: product.quantity,
    });
  });

  return sale;
};

module.exports = { create };
