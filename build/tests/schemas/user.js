"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = __importDefault(require("../../src"));
const schema = {
    username: [
        src_1.default.string,
        src_1.default.maxLength(15),
        src_1.default.minLength(5)
    ],
    password: [
        src_1.default.string,
        src_1.default['password'],
        src_1.default.maxLength(30),
        src_1.default.minLength(8)
    ],
    email: src_1.default['email']
};
exports.default = schema;
