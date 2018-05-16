const objectRecursion = require('./recursion');
const types = require('../validations/types');

export {};
const schemaParser = (isArray: Function) => {
	return (schema: any, value: string) => {
		let validations = [];
		isArray(schema)
			? schema.map((x) => validations.push(applyValueRecursion(x, value)))
			: validations.push(applyValueRecursion(schema, value));
		return validations.filter(Boolean).length === validations.length;
	};
};

const applyValueRecursion = (value, fn) => {
	if (types.isObject(value)) {
		const ola = objectRecursion(value, (str) => str === 1)
		console.log(ola);
		// console.log('objeto nessa porra', objectRecursion(fn, value));
	}
	// return { value, fn };
};

module.exports = schemaParser;
