const Regex = require('./validations/regex');
const Dates = require('./validations/dates');
const Cpf = require('./validations/cpf');
const type = require('./validations/types');

let actions = {
	regex: {},
	isValid: function() {},
	array: (a) => type.array(a),
	string: (s) => type.string(s),
	number: (n) => type.number(n),
	integer: (i) => type.integer(i),
	float: (f) => type.float(f),
	empty: (e) => {
		return actions.array(e)
			? e.length === 0
			: e === undefined && e === null && !(Object.keys(e) || e).length === 0;
	},
	positive: (n) => type.positive(n),
	negative: (n) => type.negative(n),
};

Object.keys(Regex).forEach(function(validation) {
	actions[validation] = function(string) {
		let value = string.match(Regex[validation]);
		return value === null ? false : value[0] === string;
	};
	actions.regex[validation] = Regex[validation];
});

// @Override
actions.cpf = (x) => Cpf(x);

actions.isValid = function(string, validationType) {
	return string === undefined ? false : actions[validationType](string);
};

const schemaParser = (schema, value) => {
	let validations = [];
	for (let fn in schema) {
		type.array(schema[fn])
			? schema[fn].map((x) => validations.push(x(value)))
			: validations.push(schema[fn](value));
	}
	return validations;
};

actions.validate = (anything, schema) => {
	let validations = {};
	for (let value in anything) {
		validations[value] = schemaParser(schema, anything[value]);
	}
	return validations;
};

Object.keys(Dates).forEach((x) => (actions[x] = (date) => Dates[x](date)));

actions = Object.freeze(actions);
module.exports = actions;
