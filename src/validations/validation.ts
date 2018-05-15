import {types as type} from './types';
import dates from './dates';
import Cpf from './cpf';
import regex from './regex';
import schemaParser from '../schema';

let actions = {
	regex: {},
	array: (a: Array<any>) => type.array(a),
	string: (s: string) => type.string(s),
	number: (n: number) => type.number(n),
	integer: (i: number) => type.integer(i),
	float: (f: number) => type.float(f),
	empty: (e: any) => {
		let condition = Object.keys(e).length === 0 || e.length === 0;
		return actions.array(e) ? e.length === 0 : e === undefined && e === null && !condition;
	},
	minLength: (n: number) => {
		return actions.number(n)
			? (s) => (actions.string(s) ? s.length >= n : `${s} is not a string`)
			: `${n} is not a number`;
	},
	min: (n: number) => {
		return actions.number(n) ? (s) => s >= n : false;
	},
	max: (n: number) => {
		return actions.number(n) ? (s) => s <= n : false;
	},
	maxLength: (n: number) => {
		return actions.number(n)
			? (s) => (actions.string(s) ? s.length <= n : `${s} is not a string`)
			: `${n} is not a number`;
	},
	positive: (n: number) => type.positive(n),
	negative: (n: number) => type.negative(n),
	validate: (anything: any, schema: object) => {},
	isValid: (string: string, validationType: Function) => {},
	cpf: (cpf: string) => {},
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
	const parser: Function = schemaParser(actions.array);
	
	for (let value in anything) {
		const sourceTrue = parser(schema[value], anything[value]);
		validations[value] = sourceTrue.length === 1 ? sourceTrue[0] : sourceTrue;
	}
	
	return Object.keys(anything).length === Object.values(validations).filter(Boolean).length;
};

// Validate one string value
actions.isValid = function(string: string, validationType: any) {
	let fn = actions[validationType];
	return string === undefined ? false : fn(string);
};

;
export default Object.freeze(actions);
