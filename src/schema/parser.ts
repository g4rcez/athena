import tryCatch from '../exceptions'

export const schemaParser = (isArray: Function) => {
	return (schema: any, value: string) => {
		let validations = [];
		
		isArray(schema) 
			? schema.map((func) => validations.push(tryCatch(func, value))) 
			: validations.push(tryCatch(schema, value));
		
		return validations
	};
};
