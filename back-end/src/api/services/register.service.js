const md5 = require('md5');
const { User } = require('../../database/models');
const httpException = require('../utils/http.exception');

const createUser = async (body) => {
  const { email, password } = body;

  const hashedPassword = md5(password);

  const user = await User.findOne({
    where: { email },
  });

  if (user) throw httpException(409, 'Email já cadastrado');

  await User.create({
    ...body,
    password: hashedPassword,
    role: 'customer',
  });

  const newUser = await User.findOne({ where: { email } });

  const { id, role, ...nUser } = newUser.dataValues;

  return nUser;
};

module.exports = { createUser };
