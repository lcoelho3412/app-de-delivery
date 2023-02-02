const { decode } = require('jsonwebtoken');
const service = require('../services');
const validateSchema = require('../services/validations/validationSchema');
const { saleSchema } = require('../services/validations/schema');
const { validateToken } = require('../utils/jwt.util');

const create = async (req, res) => {
  const { body } = req;

  await validateSchema(saleSchema, body);

  const sale = await service.sales.create(body);

  return res.status(201).json(sale);
};

const salesByUser = async (req, res) => {
  const { authorization } = req.headers;

  await validateToken(authorization);

  const {
    data: { email },
  } = decode(authorization);

  const sales = await service.sales.salesByUser(email);

  return res.status(200).json(sales);
};

module.exports = { create, salesByUser };
