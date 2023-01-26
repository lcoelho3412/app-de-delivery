require('dotenv/config');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const JWT_SECRET = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' });

const createToken = (data) => {
  const token = jwt.sign({ data }, JWT_SECRET, {
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
  const { data } = jwt.verify(token, process.env.JWT_SECRET);

  console.log(data);

  return data;
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
