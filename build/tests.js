"use strict";
exports.__esModule = true;
var src_1 = require("./src");
var schema = {
    name: src_1["default"].brazilianName,
    username: { id: src_1["default"].number, string: src_1["default"].username },
    age: [src_1["default"].integer, src_1["default"].max(20)],
    cpf: src_1["default"].cpf
};
var validate = src_1["default"].validate({
    name: 'Fluffykins Fulano da Silva',
    username: { id: 1, string: 'AAAAAAAAAAAA' },
    age: 19,
    cpf: '070.680.938-68'
}, schema);
console.log(src_1["default"]);
