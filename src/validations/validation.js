const { types: type } = require('./types');
const { regex } = require('./regex.js');
const { schemaParser } = require('../schema');

const actions = {
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
            ? (s => actions.string(s) ? s.length <= n : `${s} is not a string`) 
            : `${n} is not a number`
    },
    max: (n) => {
        return actions.number(n) 
            ? (s => actions.string(s) ? s.length >= n : `${s} is not a string`) 
            : `${n} is not a number`
    },
    positive: (n) => type.number.positive(n),
	negative: (n) => type.number.negative(n),
};

actions.validate = (anything, schema) => {
    let validations = {};
    
	for (const value in anything) {
		validations[value] = schemaParser(schema, anything[value]);
	}
	return validations;
};

Object.freeze(actions);

module.exports = actions;