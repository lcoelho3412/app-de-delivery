const { Sale, SalesProducts } = require('../../database/models');

const create = async (body) => {
  const { soldProducts } = body;

  const sale = await Sale.create({
    userId: body.userId,
    sellerId: body.sellerId,
    totalPrice: body.totalPrice,
    deliveryAddress: body.deliveryAddress,
    deliveryNumber: body.deliveryNumber,
    saleDate: new Date(),
    status: 'Pendente',
  });

  const soldArray = soldProducts.map(async (product) => {
    const salesProducts = await SalesProducts.create({
      saleId: sale.id,
      productId: product.productId,
      quantity: product.quantity,
    });

    return salesProducts;
  });

  await Promise.all(soldArray);

  return sale;
};

module.exports = { create };
