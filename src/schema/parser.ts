export {};
const schemaParser = (isArray: Function) => {
	return (schema: any, value: string) => {
		let validations = [];
		try {
			isArray(schema) ? schema.map((x) => validations.push(x(value))) : validations.push(schema(value));
		} catch (error) {}
		return validations.filter(Boolean).length === validations.length;
	};
};

module.exports = schemaParser;
