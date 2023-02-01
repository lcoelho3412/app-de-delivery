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

const ordersBySellerById = async (req, res) => {
  const { authorization } = req.headers;
  const id = Number(req.params.id);

  const {
    data: { email },
  } = decode(authorization);

  const ordersById = await service.seller.ordersBySellerById(email, id);

  return res.status(200).json(ordersById);
};

module.exports = {
  getOrdersBySeller,
  ordersBySellerById,
};
