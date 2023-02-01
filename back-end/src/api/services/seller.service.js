const { User, Sale } = require('../../database/models');

const getOrdersBySeller = async (email) => {
  try {
    const seller = await User.findOne({
      where: {
        email,
        role: 'seller',
      },
    });
    const sellerId = Number(seller.dataValues.id);

    const orders = await Sale.findAll({
      where: { sellerId },
    });
    return orders;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = {
  getOrdersBySeller,
};
