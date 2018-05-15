import validation from '../../src';

const schema = {
    username: [
        validation.string, 
        validation.maxLength(15),
        validation.minLength(5)
    ],
    password: [
        validation.string,
        validation['password'],
        validation.maxLength(30),
        validation.minLength(8)
    ],
    email: validation['email']
};

export default schema;