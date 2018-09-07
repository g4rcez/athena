(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        uniq: (value, compare) => value.filter((x) => x == compare).length === 1,
        allUniq: (value) => [...new Set(value)].length === value.length
    };
});
//# sourceMappingURL=collections.js.map