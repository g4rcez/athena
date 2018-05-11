const types = {
	isType: (type, test) => test.constructor === type && test !== undefined && ![null].includes(test),
	number: (n) => types.isType(Number, n),
	integer: (s) => types.isType(Integer, s),
	float: (s) => types.isType(Number, f) && f % 1 !== 0,
	string: (s) => types.isType(String, s),
	array: (a) => types.isType(Array, a),
};

types.number.positive = (n) => types.number(n) && n > 0;
types.number.negative = (n) => types.number(n) && n < 0;

module.exports = types;
