const { decode } = require('jsonwebtoken');
const service = require('../services');
const { validateToken } = require('../utils/jwt.util');
const validateSchema = require('../services/validations/validationSchema');
const { registerSchema } = require('../services/validations/schema');
const httpException = require('../utils/http.exception');

const createUser = async (req, res) => {
  const { body } = req;
  const { authorization } = req.headers;

  const {
    data: { role },
  } = decode(authorization);

  if (role !== 'administrator') {
    throw httpException(409, 'Você não é admin');
  }

  await validateSchema(registerSchema, body);

  const newUser = await service.admin.createUser(body);

  return res.status(201).json(newUser);
};

const findAll = async (req, res) => {
  const { authorization } = req.headers;

  await validateToken(authorization);

  const users = await service.admin.findAll();

  return res.status(200).json(users);
};

const remove = async (req, res) => {
  const id = Number(req.params.id);
  const { authorization } = req.headers;

  await validateToken(authorization);

  const {
    data: { role },
  } = decode(authorization);

  if (role !== 'administrator') {
    throw httpException(401, 'Unauthorized user');
  }

  await service.admin.remove(id);

  return res.sendStatus(204);
};

module.exports = { findAll, remove, createUser };
