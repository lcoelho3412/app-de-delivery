const { Sale } = require('../../database/models');

const create = async (body) => {
  // const { soldProducts } = body;

  const sale = await Sale.create({
    userId: body.userId,
    sellerId: body.sellerId,
    totalPrice: body.totalPrice,
    deliveryAddress: body.deliveryAddress,
    deliveryNumber: body.deliveryNumber,
    saleDate: new Date(),
    status: 'Pendente',
  });

  // console.log(soldProducts);

  // const soldArray = soldProducts.map(async (product) => {
  //   const salesProducts = await SalesProducts.create({
  //     saleId: sale.id,
  //     productId: product.productId,
  //     quantity: product.quantity,
  //   });

  //   return salesProducts;
  // });

  // console.log(soldArray);

  // const validation = await Promise.all(soldArray);
  // console.log(validation);

  return sale;
};

module.exports = { create };
