"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cpf_1 = __importDefault(require("./cpf"));
const cnpj_1 = __importDefault(require("./cnpj"));
const date_1 = __importDefault(require("./date"));
const range_1 = __importDefault(require("./range"));
const email_1 = __importDefault(require("./email"));
const Typeof_1 = __importDefault(require("../utils/Typeof"));
const strings_1 = __importDefault(require("./strings"));
const collections_1 = __importDefault(require("./collections"));
const ramda_1 = require("ramda");
const regex_1 = require("./regex");
class Rules {
    constructor() {
        this.rules = [];
    }
    get $rules() {
        return this.rules;
    }
    set $rules(value) {
        this.rules = value;
    }
    static new() {
        return new Rules();
    }
    static rulesName() {
        return [
            "email",
            "cpf",
            "cnpj",
            "array",
            "isEmpty",
            "isJson",
            "isDate",
            "number",
            "string",
            "object",
            "allUniq",
            "negative",
            "positive",
            "blank",
            "jwt",
            "ipv4",
            "http",
            "ipv6",
            "creditCard",
            "uuid"
        ];
    }
    email(message) {
        this.rules.push({
            name: "email",
            message: message,
            fn: (string) => email_1.default(string),
            isValid: false
        });
        return this;
    }
    cpf(message) {
        this.rules.push({
            name: "cpf",
            message: message,
            fn: (string) => cpf_1.default(string),
            isValid: false
        });
        return this;
    }
    cnpj(message) {
        this.rules.push({
            name: "cnpj",
            message: message,
            fn: (string) => cnpj_1.default(string),
            isValid: false
        });
        return this;
    }
    array(message) {
        this.rules.push({
            name: "array",
            message: message,
            fn: (arr) => Typeof_1.default.array(arr),
            isValid: false
        });
        return this;
    }
    isEmpty(message) {
        this.rules.push({
            name: "isEmpty",
            message,
            fn: (arr) => ramda_1.isEmpty(arr),
            isValid: false
        });
        return this;
    }
    equals(compare, message) {
        this.rules.push({
            name: "equals",
            message,
            compare,
            fn: (value) => ramda_1.equals(compare, value),
            isValid: false
        });
        return this;
    }
    startsWith(compare, message) {
        this.rules.push({
            name: "startsWith",
            message,
            compare,
            fn: (value) => new RegExp(`^${compare}`).test(value),
            isValid: false
        });
        return this;
    }
    endsWith(compare, message) {
        this.rules.push({
            name: "endsWith",
            message,
            compare,
            fn: (value) => new RegExp(`${compare}$`).test(value),
            isValid: false
        });
        return this;
    }
    isJson(message) {
        this.rules.push({
            name: "isJson",
            message,
            fn: (value) => Typeof_1.default.isJson(value),
            isValid: false
        });
        return this;
    }
    isDate(message) {
        this.rules.push({
            name: "isDate",
            message,
            fn: (value) => date_1.default.isDate(value),
            isValid: false
        });
        return this;
    }
    isAfterDate(after, message) {
        this.rules.push({
            name: "isAfterDate",
            message,
            compare: after,
            fn: (value) => date_1.default.isAfterDate(value, after),
            isValid: false
        });
        return this;
    }
    isBeforeDate(before, message) {
        this.rules.push({
            name: "isBeforeDate",
            message,
            compare: before,
            fn: (value) => date_1.default.isAfterDate(value, before),
            isValid: false
        });
        return this;
    }
    number(message) {
        this.rules.push({
            name: "number",
            message,
            fn: (value) => Typeof_1.default.number(value),
            isValid: false
        });
        return this;
    }
    string(message) {
        this.rules.push({
            name: "string",
            message,
            fn: (value) => Typeof_1.default.string(value),
            isValid: false
        });
        return this;
    }
    object(message) {
        this.rules.push({
            name: "object",
            message,
            fn: (value) => Typeof_1.default.isObject(value),
            isValid: false
        });
        return this;
    }
    max(compare, message) {
        this.rules.push({
            name: "max",
            message,
            compare,
            fn: (value) => range_1.default.max(compare, value),
            isValid: false
        });
        return this;
    }
    min(compare, message) {
        this.rules.push({
            name: "min",
            message,
            compare,
            fn: (value) => range_1.default.min(compare, value),
            isValid: false
        });
        return this;
    }
    minOrEquals(compare, message) {
        this.rules.push({
            name: "minOrEquals",
            message,
            compare,
            fn: (value) => range_1.default.minOrEquals(compare, value),
            isValid: false
        });
        return this;
    }
    maxOrEquals(compare, message) {
        this.rules.push({
            name: "maxOrEquals",
            message,
            compare,
            fn: (value) => range_1.default.maxOrEquals(compare, value),
            isValid: false
        });
        return this;
    }
    length(compare, message) {
        this.rules.push({
            name: "length",
            message,
            compare,
            fn: (value) => range_1.default.length(compare, value),
            isValid: false
        });
        return this;
    }
    uniq(compare, message) {
        this.rules.push({
            name: "uniq",
            message,
            compare,
            fn: (value) => collections_1.default.uniq(value, compare),
            isValid: false
        });
        return this;
    }
    allUniq(message) {
        this.rules.push({
            name: "allUniq",
            message,
            fn: (value) => collections_1.default.allUniq(value),
            isValid: false
        });
        return this;
    }
    negative(message) {
        this.rules.push({
            name: "negative",
            message,
            fn: (value) => Typeof_1.default.negative(value),
            isValid: false
        });
        return this;
    }
    positive(message) {
        this.rules.push({
            name: "positive",
            message,
            fn: (value) => Typeof_1.default.positive(value),
            isValid: false
        });
        return this;
    }
    blank(message) {
        this.rules.push({
            name: "blank",
            message,
            fn: (value) => strings_1.default.blank(value),
            isValid: false
        });
        return this;
    }
    jwt(message) {
        this.rules.push({
            name: "jwt",
            message,
            fn: (value) => regex_1.JWT.test(value),
            isValid: false
        });
        return this;
    }
    ipv4(message) {
        this.rules.push({
            name: "ipv4",
            message,
            fn: (value) => regex_1.IPV4.test(value),
            isValid: false
        });
        return this;
    }
    http(message) {
        this.rules.push({
            name: "http",
            message,
            fn: (value) => regex_1.HTTP.test(value),
            isValid: false
        });
        return this;
    }
    ipv6(message) {
        this.rules.push({
            name: "ipv6",
            message,
            fn: (value) => regex_1.IPV6.test(value),
            isValid: false
        });
        return this;
    }
    creditCard(message) {
        this.rules.push({
            name: "creditCard",
            message,
            fn: (value) => regex_1.CREDIT_CARD.test(value),
            isValid: false
        });
        return this;
    }
    must(condition, message) {
        this.rules.push({
            name: "must",
            message,
            fn: () => condition,
            isValid: false
        });
        return this;
    }
    mustBe(callback, message) {
        this.rules.push({
            name: "mustBe",
            message,
            fn: (value) => callback(value),
            isValid: false
        });
        return this;
    }
    regex(regex, message) {
        this.rules.push({
            name: "creditCard",
            message,
            fn: (value) => new RegExp(regex).test(value),
            isValid: false
        });
        return this;
    }
    uuid(message) {
        this.rules.push({
            name: "uuid",
            message,
            fn: (value) => regex_1.UUID.test(value),
            isValid: false
        });
        return this;
    }
    check(value) {
        const newList = [];
        this.rules = this.rules.map(x => {
            const isValid = x.fn(value);
            x.isValid = isValid;
            newList.push(isValid);
            return x;
        });
        return newList.filter(Boolean).length == this.rules.length;
    }
}
exports.default = Rules;
//# sourceMappingURL=index.js.map