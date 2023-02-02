const md5 = require('md5');
const { User } = require('../../database/models');
const httpException = require('../utils/http.exception');
const { createToken } = require('../utils/jwt.util');

const signIn = async (body) => {
  const { email, password } = body;

  const hashedPassword = md5(password);

  const user = await User.findOne({
    where: { email },
  });

  if (!user) throw httpException(404, 'Wrong email or password.');

  if (hashedPassword !== user.password) {
    throw httpException(400, 'Wrong email or password.');
  }
  const { password: _, ...userWithoutPassword } = user.dataValues;
  
  const token = createToken(userWithoutPassword);

  return token;
};

const createUser = async (body) => {
  const { email, password, role } = body;

  const hashedPassword = md5(password);

  const user = await User.findOne({
    attributes: { exclude: ['password'] },
    where: { email },
  });

  if (user) throw httpException(409, 'Email já cadastrado');

  await User.create({
    ...body,
    password: hashedPassword,
    role,
  });

  const newUser = await User.findOne({
    attributes: { exclude: ['password'] },
    where: { email },
  });

  return newUser;
};

const getSellers = async (id) => {
  if (id) {
    const seller = await User.findOne({
      where: {
        id,
        role: 'seller',
      },
    });

    return seller;
  }

  const sellers = await User.findAll({
    attributes: { exclude: ['password'] },
    where: { role: 'seller' },
  });

  return sellers;
};

module.exports = { signIn, createUser, getSellers };
