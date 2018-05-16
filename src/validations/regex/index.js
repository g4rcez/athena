"use strict";
exports.__esModule = true;
var common_1 = require("./common");
var brazilian_1 = require("./brazilian");
var regex = {};
[brazilian_1["default"], common_1["default"]].forEach(function (group) {
    return Object.keys(group).forEach(function (x) { return (regex[x] = group[x]); });
});
exports["default"] = regex;
