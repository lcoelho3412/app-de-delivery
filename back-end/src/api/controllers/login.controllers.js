const { validateLogin } = require('../services/login.services');
const HttpError = require('../utils/HttpError');

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) throw new HttpError(400, 'Invalid login');
        const result = await validateLogin({ email, password });

        return res.status(200).json({ token: result.token }); 
    } catch (error) {
        next(error);
    }
};

module.exports = { login };