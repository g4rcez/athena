"use strict";
exports.__esModule = true;
exports.types = {
    isType: function (type, test) {
        return test.constructor === type && test !== undefined && ![null].includes(test);
    },
    number: function (n) { return exports.types.isType(Number, n); },
    integer: function (s) { return exports.types.isType(Number, s); },
    float: function (f) { return exports.types.isType(Number, f) && f % 1 !== 0; },
    string: function (s) { return exports.types.isType(String, s); },
    array: function (a) { return exports.types.isType(Array, a); },
    positive: function (n) { return exports.types.number(n) && n > 0; },
    negative: function (n) { return exports.types.number(n) && n < 0; },
    isJson: function (n) {
        try {
            JSON.parse(n);
            return true;
        }
        catch (error) {
            return false;
        }
    },
    isObject: function (obj) { return Object(obj) === obj && typeof obj === 'object' && !Array.isArray(obj); }
};
module.exports = exports.types;
