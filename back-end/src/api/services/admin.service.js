const md5 = require('md5');
const { User } = require('../../database/models');
const httpException = require('../utils/http.exception');

const notAdmin = 'Você não é admin';

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

const findUser = async (role) => {
  if (role !== 'administrator') throw httpException(409, notAdmin);

  const users = await User.findAll({});

  if (!users) throw httpException(409, 'Nenhum usuário cadastrado');
console.log(users);
  return users;
};

const deleteUser = async (body, role) => {
  if (role !== 'administrator') throw httpException(409, notAdmin);
  
  const { email } = body;

  await User.deleteOne({
    where: { email },
  });

  // return nUser;
};

module.exports = { createUser, findUser, deleteUser };