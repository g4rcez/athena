"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = __importDefault(require("../src"));
const schemas_1 = __importDefault(require("./schemas"));
const expect_1 = __importDefault(require("expect"));
describe('User Schema', () => {
    it('should validate all inputs', () => {
        const data = {
            username: 'sektor',
            password: '@#$%asdf1234',
            email: 'tests@gmail.com'
        };
        const result = src_1.default.validate(data, schemas_1.default.user);
        expect_1.default(result).toBe(true);
    });
});
