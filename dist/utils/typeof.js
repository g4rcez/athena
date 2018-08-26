"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var types = {
	isType: function isType(t, c) {
		return c.constructor === t && c !== undefined && ![null].includes(c);
	},
	number: function number(n) {
		return types.isType(Number, n);
	},
	integer: function integer(s) {
		return types.isType(Number, s);
	},
	float: function float(f) {
		return types.isType(Number, f) && f % 1 !== 0;
	},
	string: function string(s) {
		return types.isType(String, s);
	},
	array: function array(a) {
		return Array.isArray(a);
	},
	positive: function positive(n) {
		return types.number(n) && n > 0;
	},
	negative: function negative(n) {
		return types.number(n) && n < 0;
	},
	isJson: function isJson(n) {
		try {
			JSON.parse(n);
			return true;
		} catch (error) {
			return false;
		}
	},
	isObject: function isObject(obj) {
		return Object(obj) === obj && (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" && !Array.isArray(obj);
	}
};

exports.default = types;