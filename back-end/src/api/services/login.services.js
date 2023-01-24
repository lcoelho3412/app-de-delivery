const md5 = require('md5');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const { User } = require('../../database/models');

const JWT_SECRET = fs.readFileSync(path.resolve('jwt.evaluation.key'));

const createToken = (data) => {
    const token = jwt.sign({ data }, JWT_SECRET, {
        expiresIn: '1d',
        algorithm: 'HS256', 
    });

    return token;
};

const validateLogin = async ({ email, password }) => {
    if (!email || !password) throw new Error('Invalid login');
    const user = await User.findOne({ 
        attributes: ['id', 'email', 'name', 'password', 'role'],
        where: { email } });

    if (!user) throw new Error('User not found.');

    const hashedPassword = md5(password);
    if (hashedPassword !== user.password) throw new Error('Wrong password.');

    const { password: _, ...userWithoutPassword } = user.dataValues;

    const token = createToken(userWithoutPassword);
    return { token };
};

module.exports = { validateLogin };