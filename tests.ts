import regex from './src';
const schema = {
	name: regex['brazilianName'],
	username: { id: regex.number, string: regex['username'] },
	age: [regex.integer, regex.max(32)],
	cpf: regex.cpf,
	rg: regex['rg'],
};
const validate = regex.validate(
	{
		name: ['Fluffykins Fulano da Silva', 'Fuckerson Santos'],
		username: { id: 1, string: 'username' },
		age: [18, 19, 20, 29, 31],
		cpf: '070.680.938-68',
		rg: 'AA-11.010.000',
	},
	schema,
);
console.log(validate);
