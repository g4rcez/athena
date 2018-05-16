"use strict";
exports.__esModule = true;
var types_1 = require("./types");
var verify = function (rest) { return rest == 10 || rest == 11; };
var modRest = function (sum) { return (sum * 10) % 11; };
var cpf = function (str) {
    if (!types_1.types.string(str))
        return false;
    var cpf = str
        .replace(/-/g, '')
        .replace(/\./g, '')
        .replace('/ /g', '');
    var checkSum = 0;
    var rest;
    for (var i = 1; i <= 9; i++)
        checkSum = checkSum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    rest = modRest(checkSum);
    if (verify(rest))
        rest = 0;
    if (rest != parseInt(cpf.substring(9, 10)))
        return false;
    checkSum = 0;
    for (var i = 1; i <= 10; i++)
        checkSum = checkSum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    rest = modRest(checkSum);
    if (verify(rest))
        rest = 0;
    return rest != parseInt(cpf.substring(10, 11)) ? false : true;
};
exports["default"] = cpf;
