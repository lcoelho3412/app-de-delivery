require('dotenv/config');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const JWT_SECRET = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' });

const createToken = (data) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET || JWT_SECRET, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });

  const decoded = jwt.decode(token);

  const { id, ...response } = decoded.data;

  return {
    ...response,
    token,
  };
};

const validateToken = (token) => {
  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET);

    return data;
  } catch (error) {
    const e = new Error('Expired or invalid token');
    e.status = 401;

    throw e;
  }
};

const decode = (token) => {
  const { data } = jwt.decode(token);

  return data;
};

module.exports = {
  createToken,
  validateToken,
  decode,
};
