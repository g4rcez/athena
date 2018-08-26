"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = require("../utils/typeof");

var _typeof2 = _interopRequireDefault(_typeof);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var max = function max(range, item) {
	if (_typeof2.default.array(item) || _typeof2.default.string(item)) {
		return item.length < range;
	} else if (_typeof2.default.number(item)) {
		return item < range;
	}
	return false;
};
var maxOrEquals = function maxOrEquals(range, item) {
	if (_typeof2.default.array(item) || _typeof2.default.string(item)) {
		return item.length <= range;
	} else if (_typeof2.default.number(item)) {
		return item <= range;
	}
	return false;
};
var min = function min(range, item) {
	if (_typeof2.default.array(item) || _typeof2.default.string(item)) {
		return item.length > range;
	} else if (_typeof2.default.number(item)) {
		return item > range;
	}
	return false;
};
var minOrEquals = function minOrEquals(range, item) {
	if (_typeof2.default.array(item) || _typeof2.default.string(item)) {
		return item.length >= range;
	} else if (_typeof2.default.number(item)) {
		return item >= range;
	}
	return false;
};
var length = function length(range, item) {
	if (_typeof2.default.array(item) || _typeof2.default.string(item)) {
		return item.length == range;
	} else if (_typeof2.default.number(item)) {
		return item == range;
	}
	return false;
};

exports.default = {
	max: max,
	min: min,
	length: length,
	minOrEquals: minOrEquals,
	maxOrEquals: maxOrEquals
};