const { User } = require('../../database/models');
const httpException = require('../utils/http.exception');

const notAdmin = "Você não é admin";

const createUser = async (body, role) => {
  if (role !== 'administrator') throw httpException(409, notAdmin);
  const { email, password } = body;
  const hashedPassword = md5(password);

  const user = await User.findOne({
    where: { email },
  });

  if (user) throw httpException(409, 'Email já cadastrado');

  await User.create({
    ...body,
    password: hashedPassword,
  });

  const newUser = await User.findOne({ where: { email } });

  const { id, ...nUser } = newUser.dataValues;

  return nUser;
};

const findAll = async () => {
  const users = await User.findAll({
    where: { role: !'administrator' },
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

module.exports = { findAll, findById, remove, createUser };
