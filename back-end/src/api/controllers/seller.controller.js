const service = require('../services');

const getOrdersBySeller = async (req, res) => {
console.log('cheguei no controller');
    const { email } = req.body;
    console.log('email', email);
const ordersBySeller = await service.seller.getOrdersBySeller(email);
return res.status(200).json(ordersBySeller);
};

module.exports = {
    getOrdersBySeller,
};
