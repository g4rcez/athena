"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    uniq: (value, compare) => value.filter((x) => x == compare).length === 1,
    allUniq: (value) => [...new Set(value)].length === value.length
};
//# sourceMappingURL=collections.js.map