const schemaParser = (schema, value) => {
	let validations = [];
	for (let fn in schema) {
		array(schema[fn])
			? schema[fn].map((x) => validations.push(x(value)))
			: validations.push(schema[fn](value));
	}
	return validations;
};


module.exports = {
    schemaParser
};