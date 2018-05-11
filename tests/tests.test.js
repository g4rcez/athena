const { validation } = require('../src');
const schema = require('./schemas');
const expect = require('expect');

describe('User Schema', () => {

	it('should validate all inputs', () => {

		const data = {
			username: 'sektor',
			password: '@#$%asdf1234',
			email: 'tests@gmail.com'
		}

		const result = validation.validate(data, schema.user)

		expect(result)

	});

	it('should failed username and email inputs', () => {

	});

});