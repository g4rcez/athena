export {};
const type = require('./types');
const dates = require('./dates');
const Cpf = require('./cpf');
const regex = require('./regex.js');
const schemaParser = require('../schema');

let actions = {
	regex: {},
	array: (a: Array<any>) => type.array(a),
	string: (s: string) => type.string(s),
	number: (n: number) => type.number(n),
	integer: (i: number) => type.integer(i),
	float: (f: number) => type.float(f),
	empty: (e: any) => {
		return actions.array(e)
			? e.length === 0
			: e === undefined && e === null && !(Object.keys(e) || e).length === 0;
	},
	min: (n: number) => {
		return actions.number(n)
			? (s) => (actions.string(s) ? s.length >= n : `${s} is not a string`)
			: `${n} is not a number`;
	},
	max: (n: number) => {
		return actions.number(n)
			? (s) => (actions.string(s) ? s.length <= n : `${s} is not a string`)
			: `${n} is not a number`;
	},
	positive: (n: number) => type.number.positive(n),
	negative: (n: number) => type.number.negative(n),
	dates,
	validate: (anything: any, schema: object) => {},
	isValid: (string: string, validationType: Function) => {},
	cpf: (cpf: string) => {},
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

actions = Object.freeze(actions);
module.exports = actions;
