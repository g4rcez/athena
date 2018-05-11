const schemaParser = (array) => {

	return (schema, value) => {
		let validations = [];
		
		array(schema)
			? schema.map((x) => validations.push(x(value)))
			: validations.push(schema(value));
			
		return validations;
	}
};


module.exports = {
    schemaParser
};