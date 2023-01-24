const { User } = require('../../database/models');

const createUser = async (body) => {
  console.log(body);

  const newUser = await User.create(body);

  return newUser;
};

module.exports = { createUser };
