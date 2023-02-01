const { decode } = require('jsonwebtoken');
const service = require('../services');
const { validateToken } = require('../utils/jwt.util');

const getOrdersBySeller = async (req, res) => {
  const { authorization } = req.headers;

  const {
    data: { email },
  } = decode(authorization);

  const ordersBySeller = await service.seller.getOrdersBySeller(email);

  return res.status(200).json(ordersBySeller);
};

const ordersBySaleId = async (req, res) => {
  const { authorization } = req.headers;
  const saleId = Number(req.params.id);

  await validateToken(authorization);

  const ordersById = await service.seller.ordersBySaleId(saleId);

  return res.status(200).json(ordersById);
};

const updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const updatedOrder = await service.seller.updateStatus(id, status);
  return res.status(204).json(updatedOrder);
}

module.exports = {
  getOrdersBySeller,
  ordersBySaleId,
  updateStatus,
};
