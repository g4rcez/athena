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
const email = (string) => Regex.EMAIL.test(string);
const cpf = (string) => cpf_1.default(string);
const cnpj = (string) => cnpj_1.default(string);
const uuid = (string) => Regex.UUID.test(string);
const isJson = (string) => Typeof_1.default.isJson(string);
const isJwt = (string) => Regex.JWT.test(string);
const http = (string) => Regex.HTTP.test(string);
const ipv4 = (string) => Regex.IPV4.test(string);
const ipv6 = (string) => Regex.IPV6.test(string);
const allUniq = (string) => collections_1.default.allUniq(string);
exports.default = {
    email,
    cpf,
    cnpj,
    uuid,
    isJson,
    isJwt,
    http,
    ipv4,
    ipv6,
    allUniq
};
//# sourceMappingURL=single.js.map