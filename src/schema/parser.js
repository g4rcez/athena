"use strict";
exports.__esModule = true;
var exceptions_1 = require("../exceptions");
exports.schemaParser = function (isArray) {
    return function (schema, value) {
        var validations = [];
        isArray(schema)
            ? schema.map(function (func) { return validations.push(exceptions_1["default"](func, value)); })
            : validations.push(exceptions_1["default"](schema, value));
        return validations;
    };
};
