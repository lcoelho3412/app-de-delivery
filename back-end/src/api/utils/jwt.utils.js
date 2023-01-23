const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const JWT_SECRET = fs.readFileSync(path.resolve('jwt.evaluation.key'));

const createToken = (data) => {
    console.log(JWT_SECRET);
    const token = jwt.sign({ data }, JWT_SECRET, {
        expiresIn: '1d',
        algorithm: 'HS256', 
    });

    return token;
};

module.exports = { createToken };