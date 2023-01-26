const service = require("../services");
const { registerSchema } = require("../services/validations/schema");
const validateSchema = require("../services/validations/validationSchema");

const createUser = async (req, res) => {
  const { body } = req;

  await validateSchema(registerSchema, body);

  const newUser = await service.register.createUser(req.body);

  return res.status(201).json(newUser);
};

module.exports = {
  createUser,
};
