const { User, Sale, Product } = require('../../database/models');
const httpException = require('../utils/http.exception');

const getOrdersBySeller = async (email) => {
  const seller = await User.findOne({
    where: {
      email,
      role: 'seller',
    },
  });

  const sellerId = Number(seller.dataValues.id);

  const sales = await Sale.findAll({
    where: {
      sellerId,
    },
  });

  // descomentar caso queira trazer o erro direto no front
  
  // if (sales.length === 0) {
  //   throw httpException(404, 'Não há pedidos');
  // }

  return sales;
};

const ordersBySaleId = async (saleId) => {
  const sale = await Sale.findByPk(saleId, {
    include: [
      { model: User, as: 'seller', attributes: ['name'] },
      { model: Product, as: 'product', attributes: ['id', 'name', 'price'] },
    ],
  });

  if (!sale) {
    throw httpException(404, 'Não há pedidos');
  }

  return sale;
};

const updateStatus = async (saleId, saleStatus) => {
await Sale.update(
  { status: saleStatus }, 
  { where: { id: saleId } },
  );
const updatedOrder = await ordersBySaleId(saleId);
return updatedOrder;
};

module.exports = {
  getOrdersBySeller,
  ordersBySaleId,
  updateStatus,
};
