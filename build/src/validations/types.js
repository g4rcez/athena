"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = {
    isType: (type, test) => test.constructor === type && test !== undefined && ![null].includes(test),
    number: (n) => exports.types.isType(Number, n),
    integer: (s) => exports.types.isType(Number, s),
    float: (f) => exports.types.isType(Number, f) && f % 1 !== 0,
    string: (s) => exports.types.isType(String, s),
    array: (a) => exports.types.isType(Array, a),
    positive: (n) => exports.types.number(n) && n > 0,
    negative: (n) => exports.types.number(n) && n < 0,
    isJson: (n) => {
        try {
            JSON.parse(n);
            return true;
        }
        catch (error) {
            return false;
        }
    },
    isObject: (obj) => Object(obj) === obj && typeof obj === 'object' && !Array.isArray(obj),
};
module.exports = exports.types;
