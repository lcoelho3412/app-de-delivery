const { User } = require('../../database/models');
const httpException = require('../utils/http.exception');

const findAll = async () => {
  const users = await User.findAll({});

  const userWithoutPassword = users.map((user) => ({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  }));

  return userWithoutPassword;
};

const findById = async (id) => {
  const user = await User.findOne({
    where: { id },
  });

  if (!user) throw httpException(409, 'Nenhum usuário cadastrado');

  const { password: _, ...userWithoutPassword } = user.dataValues;

  return userWithoutPassword;
};

const remove = async (id) => {
  await findById(id);

  await User.destroy({
    where: { id },
  });
};

module.exports = { findAll, findById, remove };
