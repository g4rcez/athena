"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Typeof_1 = __importDefault(require("../utils/Typeof"));
const cnpj_1 = __importDefault(require("./../rules/cnpj"));
const collections_1 = __importDefault(require("../rules/collections"));
const Regex = __importStar(require("../rules/regex"));
const cpf_1 = __importDefault(require("../rules/cpf"));
exports.email = (string) => Regex.EMAIL.test(string);
exports.cpf = (string) => cpf_1.default(string);
exports.cnpj = (string) => cnpj_1.default(string);
exports.uuid = (string) => Regex.UUID.test(string);
exports.isJson = (string) => Typeof_1.default.isJson(string);
exports.isJwt = (string) => Regex.JWT.test(string);
exports.http = (string) => Regex.HTTP.test(string);
exports.ipv4 = (string) => Regex.IPV4.test(string);
exports.ipv6 = (string) => Regex.IPV6.test(string);
exports.allUniq = (string) => collections_1.default.allUniq(string);
//# sourceMappingURL=single.js.map