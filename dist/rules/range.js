var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../utils/Typeof"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Typeof_1 = __importDefault(require("../utils/Typeof"));
    const max = (range, item) => {
        if (Typeof_1.default.array(item) || Typeof_1.default.string(item)) {
            return item.length < range;
        }
        else if (Typeof_1.default.number(item)) {
            return item < range;
        }
        return false;
    };
    const maxOrEquals = (range, item) => {
        if (Typeof_1.default.array(item) || Typeof_1.default.string(item)) {
            return item.length <= range;
        }
        else if (Typeof_1.default.number(item)) {
            return item <= range;
        }
        return false;
    };
    const min = (range, item) => {
        if (Typeof_1.default.array(item) || Typeof_1.default.string(item)) {
            return item.length > range;
        }
        else if (Typeof_1.default.number(item)) {
            return item > range;
        }
        return false;
    };
    const minOrEquals = (range, item) => {
        if (Typeof_1.default.array(item) || Typeof_1.default.string(item)) {
            return item.length >= range;
        }
        else if (Typeof_1.default.number(item)) {
            return item >= range;
        }
        return false;
    };
    const length = (range, item) => {
        if (Typeof_1.default.array(item) || Typeof_1.default.string(item)) {
            return item.length == range;
        }
        else if (Typeof_1.default.number(item)) {
            return item == range;
        }
        return false;
    };
    exports.default = {
        max,
        min,
        length,
        minOrEquals,
        maxOrEquals
    };
});
//# sourceMappingURL=range.js.map