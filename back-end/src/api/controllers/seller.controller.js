const service = require('../services');

const getOrdersBySeller = async (req, res) => {
const { email } = req.body;
const ordersBySeller = await service.seller.getOrdersBySeller(email);
return res.status(200).json(ordersBySeller);
};

module.exports = {
    getOrdersBySeller,
};
