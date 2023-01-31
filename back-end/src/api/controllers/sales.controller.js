const service = require('../services');
const validateSchema = require('../services/validations/validationSchema');
const { saleSchema } = require('../services/validations/schema');
const { SalesProducts } = require('../../database/models');

const create = async (req, res) => {
  const { body } = req;

  const { soldProducts } = body;

  // await validateSchema(saleSchema, body);

  const sale = await service.sales.create(body);

  const soldArray = soldProducts.map(async (product) => {
    const salesProducts = await SalesProducts.create({
      saleId: sale.id,
      productId: product.productId,
      quantity: product.quantity,
    });

    return salesProducts;
  });

  const validation = await Promise.all(soldArray);
  console.log(validation);

  return res.status(201).json(sale);
};

// {
//   "userId": 3,
//     "totalPrice": 3.49,
//       "deliveryAddress": "",
//         "deliveryNumber": 0,
//           "soldProducts": [
//             {
//               "productId": 11,
//               "quantity": 1
//             }
//           ]
// }

module.exports = { create };
