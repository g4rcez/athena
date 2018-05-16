"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var types_1 = require("./types");
var dates_1 = require("./dates");
var cpf_1 = require("./cpf");
var regex_1 = require("./regex");
var schema_1 = require("../schema");
var actions = __assign({ regex: {} }, regex_1["default"], { array: function (a) { return types_1.types.array(a); }, string: function (s) { return types_1.types.string(s); }, number: function (n) { return types_1.types.number(n); }, integer: function (i) { return types_1.types.integer(i); }, float: function (f) { return types_1.types.float(f); }, empty: function (e) {
        var condition = Object.keys(e).length === 0 || e.length === 0;
        return actions.array(e) ? e.length === 0 : e === undefined && e === null && !condition;
    }, minLength: function (n) {
        return actions.number(n)
            ? function (s) { return (actions.string(s) ? s.length >= n : s + " is not a string"); }
            : n + " is not a number";
    }, min: function (n) {
        return actions.number(n) ? function (s) { return s >= n; } : false;
    }, max: function (n) {
        return actions.number(n) ? function (s) { return s <= n; } : false;
    }, maxLength: function (n) {
        return actions.number(n)
            ? function (s) { return (actions.string(s) ? s.length <= n : s + " is not a string"); }
            : n + " is not a number";
    }, positive: function (n) { return types_1.types.positive(n); }, negative: function (n) { return types_1.types.negative(n); }, validate: function (anything, schema) { }, isValid: function (string, validationType) { }, cpf: function (cpf) { }, dates: dates_1["default"] });
// Create regex validations properties
Object.keys(regex_1["default"]).forEach(function (validation) {
    actions[validation] = function (string) {
        var value = string.match(regex_1["default"][validation]);
        return value === null ? false : value[0] === string;
    };
    actions.regex[validation] = regex_1["default"][validation];
});
// @Override
actions.cpf = function (x) { return cpf_1["default"](x); };
// Validations with schema
actions.validate = function (schema, anything) {
    var validations = {};
    var parser = schema_1["default"](actions.array);
    for (var value in anything) {
        var sourceTrue = parser(schema[value], anything[value]);
        validations[value] = sourceTrue.length === 1 ? sourceTrue[0] : sourceTrue;
    }
    return Object.keys(anything).length === Object.values(validations).filter(Boolean).length;
};
// Validate one string value
actions.isValid = function (string, validationType) {
    var fn = actions[validationType];
    return string === undefined ? false : fn(string);
};
exports["default"] = Object.freeze(actions);
