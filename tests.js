const regex = require('./src/index.ts');
const schema = {
	name: [regex.brazilianName],
	username: [regex.username],
	age: [regex.integer, regex.max(20)],
	cpf: regex.cpf,
};
const validate = regex.validate(
	{
		name: 'Fluffykins Fulano da Silva',
		username: 'fuckin6drag',
		age: 19,
		cpf: '070.680.938-68',
	},
	schema,
);

console.log(validate);
