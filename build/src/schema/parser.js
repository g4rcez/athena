"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exceptions_1 = __importDefault(require("../exceptions"));
exports.schemaParser = (isArray) => {
    return (schema, value) => {
        let validations = [];
        isArray(schema)
            ? schema.map((func) => validations.push(exceptions_1.default(func, value)))
            : validations.push(exceptions_1.default(schema, value));
        return validations;
    };
};
