const userService = require('../services/user.service');

const createUser = async (req, res) => {
  const newUser = await userService.createUser(req.body);

  res.status(201).json(newUser);
};

module.exports = {
  createUser,
};
