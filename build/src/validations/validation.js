"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const dates_1 = __importDefault(require("./dates"));
const cpf_1 = __importDefault(require("./cpf"));
const regex_1 = __importDefault(require("./regex"));
const schema_1 = __importDefault(require("../schema"));
let actions = Object.assign({ regex: {} }, regex_1.default, { array: (a) => types_1.types.array(a), string: (s) => types_1.types.string(s), number: (n) => types_1.types.number(n), integer: (i) => types_1.types.integer(i), float: (f) => types_1.types.float(f), empty: (e) => {
        let condition = Object.keys(e).length === 0 || e.length === 0;
        return actions.array(e) ? e.length === 0 : e === undefined && e === null && !condition;
    }, minLength: (n) => {
        return actions.number(n)
            ? (s) => (actions.string(s) ? s.length >= n : `${s} is not a string`)
            : `${n} is not a number`;
    }, min: (n) => {
        return actions.number(n) ? (s) => s >= n : false;
    }, max: (n) => {
        return actions.number(n) ? (s) => s <= n : false;
    }, maxLength: (n) => {
        return actions.number(n)
            ? (s) => (actions.string(s) ? s.length <= n : `${s} is not a string`)
            : `${n} is not a number`;
    }, positive: (n) => types_1.types.positive(n), negative: (n) => types_1.types.negative(n), validate: (anything, schema) => { }, isValid: (string, validationType) => { }, cpf: (cpf) => { }, dates: dates_1.default });
// Create regex validations properties
Object.keys(regex_1.default).forEach(function (validation) {
    actions[validation] = function (string) {
        let value = string.match(regex_1.default[validation]);
        return value === null ? false : value[0] === string;
    };
    actions.regex[validation] = regex_1.default[validation];
});
// @Override
actions.cpf = (x) => cpf_1.default(x);
// Validations with schema
actions.validate = (schema, anything) => {
    let validations = {};
    const parser = schema_1.default(actions.array);
    for (let value in anything) {
        const sourceTrue = parser(schema[value], anything[value]);
        validations[value] = sourceTrue.length === 1 ? sourceTrue[0] : sourceTrue;
    }
    return Object.keys(anything).length === Object.values(validations).filter(Boolean).length;
};
// Validate one string value
actions.isValid = function (string, validationType) {
    let fn = actions[validationType];
    return string === undefined ? false : fn(string);
};
exports.default = Object.freeze(actions);
