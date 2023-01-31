const { User, Sale } = require('../../database/models');

const getOrdersBySeller = async (email) => {
const seller = await User.findOne({
    where: {
      email,
      role: 'seller',
    },
  });
const sellerId = Number(seller.dataValues.id);
console.log('sellerId', sellerId);
const orders = await Sale.findAll({ 
    where: { sellerId }, 
});
return orders;
};

module.exports = {
    getOrdersBySeller,
};