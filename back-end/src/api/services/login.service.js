const md5 = require('md5');
const { User } = require('../../database/models');
const httpException = require('../utils/http.exception');
const { createToken } = require('../utils/jwt.util');

const signIn = async (body) => {
  const { email, password } = body;

  const hashedPassword = md5(password);

  const user = await User.findOne({
    where: { email, password: hashedPassword },
  });

  if (!user) throw httpException(400, 'Wrong email or password.');

  const { password: _, ...userWithoutPassword } = user.dataValues;

  const token = createToken(userWithoutPassword);

  return token;
};

module.exports = { signIn };
