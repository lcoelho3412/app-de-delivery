const service = require('../services');
const validateSchema = require('../services/validations/validationSchema');
const { loginSchema } = require('../services/validations/schema');

const signIn = async (req, res) => {
  const { body } = req;

  await validateSchema(loginSchema, body);

  const token = await service.login.signIn(body);

  return res.status(200).json(token);
};

module.exports = { signIn };
