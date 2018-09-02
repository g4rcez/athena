"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types = {
    isType: (t, c) => c.constructor === t && c !== undefined && ![undefined].includes(c),
    number: (n) => types.isType(Number, n),
    integer: (s) => types.isType(Number, s),
    float: (f) => types.isType(Number, f) && f % 1 !== 0,
    string: (s) => types.isType(String, s),
    array: (a) => Array.isArray(a),
    positive: (n) => types.number(n) && n > 0,
    negative: (n) => types.number(n) && n < 0,
    isJson: (n) => {
        try {
            JSON.parse(n);
            return true;
        }
        catch (error) {
            return false;
        }
    },
    isObject: (obj) => Object(obj) === obj && typeof obj === "object" && !Array.isArray(obj)
};
exports.default = types;
//# sourceMappingURL=Typeof.js.map