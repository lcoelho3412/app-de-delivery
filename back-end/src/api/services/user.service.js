const { User } = require('../../database/models');

const createUser = async ({ username, email, password }) => {
  const formatedUser = {
    name: username,
    email,
    password,
    role: 'user',
  };

  const newUser = await User.create(formatedUser);

  return newUser;
};

module.exports = { createUser };
