const { decode } = require('jsonwebtoken');
const service = require('../services');

const getOrdersBySeller = async (req, res) => {
  const { authorization } = req.headers;

  const {
    data: { email },
  } = decode(authorization);

  const ordersBySeller = await service.seller.getOrdersBySeller(email);

  return res.status(200).json(ordersBySeller);
};

module.exports = {
  getOrdersBySeller,
};
