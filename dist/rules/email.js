(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./regex"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const regex_1 = require("./regex");
    exports.default = (string) => {
        return !!string ? regex_1.EMAIL.test(string) : false;
    };
});
//# sourceMappingURL=email.js.map