const type = require('./types');
const dates = require('./dates');
const Cpf = require('./cpf');
const regex = require('./regex.js');
const schemaParser = require('../schema');

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
	min: (n) => {
		return actions.number(n)
			? (s) => (actions.string(s) ? s.length >= n : `${s} is not a string`)
			: `${n} is not a number`;
	},
	max: (n) => {
		return actions.number(n)
			? (s) => (actions.string(s) ? s.length <= n : `${s} is not a string`)
			: `${n} is not a number`;
	},
	positive: (n) => type.number.positive(n),
	negative: (n) => type.number.negative(n),
	dates,
};

// Create regex validations properties
Object.keys(regex).forEach(function(validation) {
	actions[validation] = function(string) {
		let value = string.match(regex[validation]);
		return value === null ? false : value[0] === string;
	};
	actions.regex[validation] = regex[validation];
});

// @Override
actions.cpf = (x) => Cpf(x);

actions.validate = (anything, schema) => {
	let validations = {};
	const parser = schemaParser(actions.array);
	for (const value in anything) {
		validations[value] = parser(schema[value], anything[value]);
	}
	return validations;
};

actions.isValid = function(string, validationType) {
	return string === undefined ? false : actions[validationType](string);
};

module.exports = actions;
