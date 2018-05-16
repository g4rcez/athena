import validation from '../src';
import schema from './schemas';
import expect from 'expect';
import mocha from 'mocha';

describe('User Schema', () => {

	it('should validate all inputs', () => {

		const data = {
			username: 'sektor',
			password: '@#$%asdf1234',
			email: 'tests@gmail.com'
		}

		const result = validation.validate(data, schema.user);

		expect(result).toBe(true);

	});

});
