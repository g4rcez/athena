var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Typeof"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Typeof_1 = __importDefault(require("./Typeof"));
    const clear = (string) => Typeof_1.default.string(string)
        ? string
            .replace(/ /g, "")
            .replace(/\t/g, "")
            .replace(/\n/g, "")
            .replace(/\r/g, "")
        : "";
    exports.default = {
        clear
    };
});
//# sourceMappingURL=Strings.js.map