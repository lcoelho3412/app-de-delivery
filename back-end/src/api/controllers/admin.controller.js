const jwt = require('jsonwebtoken');
const fs = require('fs');

const service = require('../services');
const httpException = require('../utils/http.exception');
const { validateToken } = require('../utils/jwt.util');

const { registerSchemaAdmin } = require('../services/validations/schema');
const validateSchema = require('../services/validations/validationSchema');

const { decode } = jwt;

const JWT_SECRET = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' });

const createUser = async (req, res) => {
  const token = req.headers.authorization;
  const payload = jwt.verify(token, JWT_SECRET);
  req.user = payload;  

  const { body } = req;

  await validateSchema(registerSchemaAdmin, body);

  const newUser = await service.admin.createUser(req.body, payload.data.role);

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
