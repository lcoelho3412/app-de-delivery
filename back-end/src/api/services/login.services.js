const bcrypt = require('bcryptjs');
const { User } = require('../../database/models');
const createToken = require('../utils/jwt.utils');

const validateLogin = async ({ email, password }) => {
    if (!email || !password) throw new Error('Invalid login');
    const user = await User.findOne({ 
        attributes: ['id', 'email', 'name', 'password', 'role'],
        where: { email } });
    console.log('password do bd:', user.password);
    console.log('password do body:', password);

    if (!user) throw new Error('User not found.');
  
    const match = await bcrypt.compare(password, user.password);
    console.log(await bcrypt.compare(password, user.password));
    
    if (!match) throw new Error('Wrong password.');

console.log('resultado da bcrypt:', match);
    const { password: _, ...userWithoutPassword } = user.dataValues;

    const token = createToken(userWithoutPassword);
console.log('token na service:', token);
    return { token };
};

module.exports = { validateLogin };