require('dotenv/config');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const httpException = require('./http.exception');

const JWT_SECRET = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' });

const createToken = (data) => {
  const token = jwt.sign({ data }, JWT_SECRET, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });

  const decoded = jwt.decode(token);

  return {
    ...decoded.data,
    token,
  };
};

const validateToken = (token) => {
  try {
    const { data } = jwt.verify(token, JWT_SECRET);

    return data;
  } catch (error) {
    throw httpException(401, 'Expired or invalid token');
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
