"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = require("./typeof");

var _typeof2 = _interopRequireDefault(_typeof);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clear = function clear(string) {
	return _typeof2.default.string(string) ? string.replace(/ /g, "").replace(/\t/g, "").replace(/\n/g, "").replace(/\r/g, "") : "";
};

exports.default = {
	clear: clear
};