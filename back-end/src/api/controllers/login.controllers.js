const { validateLogin } = require('../services/login.services');

const login = async (req, res, next) => {
    console.log(req.body);
    const { email, password } = req.body;
    try {
        const result = await validateLogin({ email, password });
        return res.status(200).json({ token: result.token });
    } catch (error) {
        next(error);
    }
};

module.exports = { login };