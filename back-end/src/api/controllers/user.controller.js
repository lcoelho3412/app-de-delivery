const service = require('../services');
const { registerSchema, loginSchema } = require('../services/validations/schema');
const validateSchema = require('../services/validations/validationSchema');

const createUser = async (req, res) => {
  const { body } = req;

  await validateSchema(registerSchema, body);

  const newUser = await service.user.createUser(req.body);

  return res.status(201).json(newUser);
};

const login = async (req, res) => {
  const { body } = req;

  await validateSchema(loginSchema, body);

  const token = await service.user.signIn(body);

  return res.status(200).json(token);
};

const getSellers = async (req, res) => {
  const { id } = req.params;

  const sellers = await service.user.getSellers(id);

  return res.status(200).json(sellers);
};

module.exports = {
  createUser,
  login,
  getSellers,
};
