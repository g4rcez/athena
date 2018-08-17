const types = {
	isType: (type, test) => test.constructor === type && test !== undefined && ![null].includes(test),
	number: (n) => types.isType(Number, n),
	integer: (s) => types.isType(Number, s),
	float: (f) => types.isType(Number, f) && f % 1 !== 0,
	string: (s) => types.isType(String, s),
	array: (a) => types.isType(Array, a),
	positive: (n) => types.number(n) && n > 0,
	negative: (n) => types.number(n) && n < 0,
	isJson: (n) => {
		try {
			JSON.parse(n);
			return true;
		} catch (error) {
			return false;
		}
	},
	isObject: (obj) => Object(obj) === obj && typeof obj === "object" && !Array.isArray(obj),
};

export default types;
