import regex from './src';
const schema = {
	name: regex.brazilianName,
	username: { id: regex.number, string: regex.username },
	age: [regex.integer, regex.max(20)],
	cpf: regex.cpf,
};
const validate = regex.validate(
	{
		name: 'Fluffykins Fulano da Silva',
		username: { id: 1, string: 'AAAAAAAAAAAA' },
		age: 19,
		cpf: '070.680.938-68',
	},
	schema,
);
console.log(regex);
