const md5 = require('md5');
const { User } = require('../../database/models');
const httpException = require('../utils/http.exception');

const createUser = async (body) => {
  const { email, password, role } = body;
  const hashedPassword = md5(password);

  const user = await User.findOne({
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

const findAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return users;
};

const findById = async (id) => {
  const user = await User.findOne({
    attributes: { exclude: ['password'] },
    where: { id },
  });

  if (!user) throw httpException(409, 'Nenhum usuário cadastrado');

  return user;
};

const remove = async (id) => {
  await findById(id);

  await User.destroy({
    where: { id },
  });
};

module.exports = { createUser, findAll, findById, remove };
