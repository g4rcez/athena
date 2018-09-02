"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regex_1 = require("./regex");
exports.default = (string) => {
    return !!string ? regex_1.EMAIL.test(string) : false;
};
//# sourceMappingURL=email.js.map