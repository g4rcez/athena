"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regex = require("./regex");

exports.default = function (string) {
	return !!string ? _regex.EMAIL.test(string) : false;
};