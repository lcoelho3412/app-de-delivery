const service = require('../services');
const validateSchema = require('../services/validations/validationSchema');
const { saleSchema } = require('../services/validations/schema');

const checkout = async (req, res) => {
  const { body } = req;

  await validateSchema(saleSchema, body);

  const purchasedItems = await service.sales.checkout(body);

  return res.status(200).json(purchasedItems);
};

module.exports = { checkout };
