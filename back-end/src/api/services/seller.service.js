const { User, Sale } = require('../../database/models');
// const httpException = require('../utils/http.exception');

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

  // if (sales.length === 0) {
  //   throw httpException(404, 'Não há pedidos');
  // }

  return sales;
};

module.exports = {
  getOrdersBySeller,
};
