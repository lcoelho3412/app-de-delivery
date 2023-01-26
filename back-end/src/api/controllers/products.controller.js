const service = require('../services');

const getAll = async (_req, res) => {
  const products = await service.products.getAll();

  return res.status(200).json(products);
};

module.exports = { getAll };
