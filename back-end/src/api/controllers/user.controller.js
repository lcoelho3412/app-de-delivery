const userService = require('../services/user.service');
const registrationSchema = require('../validations/schema');

const createUser = async (req, res, next) => {
  try {
    registrationSchema.validate(req.body);
    
    const newUser = await userService.createUser(req.body);
  
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
};
