const validation = require('../../src');


const schema = {
    username: [
        validation.string, 
        validation.max(15),
        validation.min(5)
    ],
    password: [
        validation.string,
        validation.password,
        validation.max(30),
        validation.min(8)
    ],
    email: validation.email
};

module.exports = schema;