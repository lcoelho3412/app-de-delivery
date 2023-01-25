const { User } = require('../../database/models');
const httpException = require('../utils/http.exception');

const createUser = async (body) => {
  const { email } = body;

  const user = await User.findOne({
    where: { email },
  });

  if (user) throw httpException(422, 'Email já cadastrado');

  const newUser = await User.create({
    ...body,
    role: 'customer',
  });

  return newUser;
};

module.exports = { createUser };
