const service = require('../services');
const validateSchema = require('../services/validations/validationSchema');
const { saleSchema } = require('../services/validations/schema');

const create = async (req, res) => {
  const { id } = req.headers;
  const { body } = req;

  await validateSchema(saleSchema, body);

  const sale = await service.sales.create(id, body);

  return res.status(201).json(sale);
};

module.exports = { create };
