"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
exports.default = {
    isDate: (value) => moment_1.default(value).isValid(),
    isAfterDate: (value, after) => moment_1.default(value).isAfter(after),
    isBeforeDate: (value, date) => moment_1.default(value).isBefore(date)
};
//# sourceMappingURL=date.js.map