const { Sale, SalesProducts, User, Product } = require('../../database/models');
const httpException = require('../utils/http.exception');

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

  const soldArray = soldProducts.map(async (product) =>
    SalesProducts.create({
      saleId: sale.id,
      productId: product.productId,
      quantity: product.quantity,
    }));

  await Promise.all(soldArray);

  return sale;
};

const salesByUser = async (email) => {
  const user = await User.findOne({ where: { email } });

  const sale = await Sale.findAll({ where: { userId: user.id } });

  return sale;
};

const saleById = async (saleId) => {
  const sale = await Sale.findByPk(saleId, {
    include: [
      { model: User, as: 'seller', attributes: ['name'] },
      { model: Product, as: 'product', attributes: ['id', 'name', 'price'] },
    ],
  });

  if (!sale) {
    throw httpException(404, 'Venda não encontrada');
  }

  return sale;
};

module.exports = { create, salesByUser, saleById };
