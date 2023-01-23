const bcrypt = require('bcryptjs');
const { User } = require('../../database/models/users.model');
const createToken = require('../utils/jwt.utils');

const validateLogin = async ({ email, password }) => {
    const user = await User.findOne({ 
        attributes: ['id', 'email', 'name', 'password', 'role'],
        where: { email } });

    const match = await bcrypt.compare(password, user.password);
    if (!user || !match) {
        return { type: 400 };
    }

    const { password: _, ...userWithoutPassword } = user.dataValues;

    const token = createToken(userWithoutPassword);

    return { token };
};

module.exports = { validateLogin };