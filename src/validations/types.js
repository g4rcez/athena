const isType = (type, test) => test.constructor === type && test !== undefined && ![null].includes(test);
const number = (n) => isType(Number, n);
const integer = (s) => isType(Integer, s);
const float = (f) => isType(Number, f) && f % 1 !== 0;
const string = (s) => isType(String, s);
const array = (a) => isType(Array, a);
const positive = (n) => number(n) && n > 0;
const negative = (n) => number(n) && n < 0;
const pipe = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));

module.exports = {
	isType: (type, test) => isType(type, test),
	number: (n) => number(n),
	integer: (n) => integer(n),
	float: (n) => float(n),
	string: (n) => string(n),
	array: (n) => array(n),
	positive: (n) => positive(n),
	negative: (n) => negative(n),
};
