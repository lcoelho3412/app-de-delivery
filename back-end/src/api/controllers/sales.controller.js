const service = require('../services');
const validateSchema = require('../services/validations/validationSchema');
const { saleSchema } = require('../services/validations/schema');

const create = async (req, res) => {
  const { body } = req;

  await validateSchema(saleSchema, body);

  const sale = await service.sales.create(body);

  return res.status(201).json(sale);
};

module.exports = { create };
