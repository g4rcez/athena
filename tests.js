const regex = require('./src/index.ts');
const schema = {
	username: [regex.username,regex.brazilianName],
	age: regex.integer,
	cpf: regex.cpf,
};
const validate = regex.validate(
	{
		username: 'fluffykinsmonteiro',
		age: 19,
		cpf: '111.111.111-61',
	},
	schema,
);

console.log(validate);
