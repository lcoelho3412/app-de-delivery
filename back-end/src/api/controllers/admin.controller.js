const { decode } = require('jsonwebtoken');
const service = require('../services');
const httpException = require('../utils/http.exception');

const findAll = async (_req, res) => {
  const users = await service.admin.findAll();

  return res.status(200).json(users);
};

const remove = async (req, res) => {
  const id = Number(req.params.id);
  const { authorization } = req.headers;
  const {
    data: { role },
  } = decode(authorization);

  if (role !== 'administrator') {
    throw httpException(401, 'Unauthorized user');
  }

  await service.admin.remove(id);

  return res.sendStatus(204);
};

module.exports = { findAll, remove };
