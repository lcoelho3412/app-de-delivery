const userService = require('../services/user.service');

const createUser = async (req, res) => {
  // const { name, email, password, role } = req.body;

  const newUser = await userService.createUser(req.body);

  res.status(201).json(newUser);
};

module.exports = {
  createUser,
};
