"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __importDefault(require("./common"));
const brazilian_1 = __importDefault(require("./brazilian"));
let regex = {};
[brazilian_1.default, common_1.default].forEach((group) => Object.keys(group).forEach((x) => (regex[x] = group[x])));
exports.default = regex;
