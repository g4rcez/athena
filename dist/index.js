var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./validator", "./rules", "./validator/single"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const validator_1 = __importDefault(require("./validator"));
    const rules_1 = __importDefault(require("./rules"));
    const single_1 = __importDefault(require("./validator/single"));
    class Athena {
        static validator() {
            return new validator_1.default();
        }
        static rules() {
            return new rules_1.default();
        }
        static uniqValidator() {
            return Object.assign({}, single_1.default);
        }
    }
    exports.default = Athena;
});
//# sourceMappingURL=index.js.map