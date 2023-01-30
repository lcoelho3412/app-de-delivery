const { User } = require('../../database/models');
const httpException = require('../utils/http.exception');

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

module.exports = { findAll, findById, remove };
