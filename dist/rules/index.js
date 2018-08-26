"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cpf = require("./cpf");

var _cpf2 = _interopRequireDefault(_cpf);

var _cnpj = require("./cnpj");

var _cnpj2 = _interopRequireDefault(_cnpj);

var _range = require("./range");

var _range2 = _interopRequireDefault(_range);

var _email = require("./email");

var _email2 = _interopRequireDefault(_email);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _typeof = require("../utils/typeof");

var _typeof2 = _interopRequireDefault(_typeof);

var _strings = require("../utils/strings");

var _strings2 = _interopRequireDefault(_strings);

var _ramda = require("ramda");

var _regex2 = require("./regex");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rules = function () {
	function Rules() {
		_classCallCheck(this, Rules);

		this.rules = [];
	}

	_createClass(Rules, [{
		key: "email",
		value: function email(message) {
			this.rules.push({
				name: "email",
				message: message,
				fn: function fn(string) {
					return (0, _email2.default)(string);
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "cpf",
		value: function cpf(message) {
			this.rules.push({
				name: "cpf",
				message: message,
				fn: function fn(string) {
					return (0, _cpf2.default)(string);
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "cnpj",
		value: function cnpj(message) {
			this.rules.push({
				name: "cnpj",
				message: message,
				fn: function fn(string) {
					return (0, _cnpj2.default)(string);
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "array",
		value: function array(message) {
			this.rules.push({
				name: "array",
				message: message,
				fn: function fn(arr) {
					return _typeof2.default.array(arr);
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "isEmpty",
		value: function isEmpty(message) {
			this.rules.push({
				name: "isEmpty",
				message: message,
				fn: function fn(arr) {
					return (0, _ramda.isEmpty)(arr);
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "equals",
		value: function equals(compare, message) {
			this.rules.push({
				name: "equals",
				message: message,
				compare: compare,
				fn: function fn(value) {
					return (0, _ramda.equals)(compare, value);
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "startsWith",
		value: function startsWith(compare, message) {
			this.rules.push({
				name: "startsWith",
				message: message,
				compare: compare,
				fn: function fn(value) {
					return new RegExp("^" + compare).test(value);
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "endsWith",
		value: function endsWith(compare, message) {
			this.rules.push({
				name: "endsWith",
				message: message,
				compare: compare,
				fn: function fn(value) {
					return new RegExp(compare + "$").test(value);
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "isJson",
		value: function isJson(message) {
			this.rules.push({
				name: "isJson",
				message: message,
				compare: compare,
				fn: function fn(value) {
					return _typeof2.default.isJson(value);
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "isDate",
		value: function isDate(message) {
			this.rules.push({
				name: "isDate",
				message: message,
				fn: function fn(value) {
					return (0, _moment2.default)(value).isValid();
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "isAfterDate",
		value: function isAfterDate(after, message) {
			this.rules.push({
				name: "isAfterDate",
				message: message,
				compare: after,
				fn: function fn(value) {
					return (0, _moment2.default)(value).isAfter(after);
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "isBeforeDate",
		value: function isBeforeDate(before, message) {
			this.rules.push({
				name: "isBeforeDate",
				message: message,
				compare: before,
				fn: function fn(value) {
					return (0, _moment2.default)(value).isBefore(before);
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "number",
		value: function number(message) {
			this.rules.push({
				name: "number",
				message: message,
				fn: function fn(value) {
					return _typeof2.default.number(value);
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "string",
		value: function string(message) {
			this.rules.push({
				name: "string",
				message: message,
				fn: function fn(value) {
					return _typeof2.default.string(value);
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "object",
		value: function object(message) {
			this.rules.push({
				name: "object",
				message: message,
				fn: function fn(value) {
					return _typeof2.default.isObject(value);
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "max",
		value: function max(compare, message) {
			this.rules.push({
				name: "max",
				message: message,
				compare: compare,
				fn: function fn(value) {
					return _range2.default.max(compare, value);
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "min",
		value: function min(compare, message) {
			this.rules.push({
				name: "min",
				message: message,
				compare: compare,
				fn: function fn(value) {
					return _range2.default.min(compare, value);
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "minOrEquals",
		value: function minOrEquals(compare, message) {
			this.rules.push({
				name: "minOrEquals",
				message: message,
				compare: compare,
				fn: function fn(value) {
					return _range2.default.minOrEquals(compare, value);
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "maxOrEquals",
		value: function maxOrEquals(compare, message) {
			this.rules.push({
				name: "maxOrEquals",
				message: message,
				compare: compare,
				fn: function fn(value) {
					return _range2.default.maxOrEquals(compare, value);
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "length",
		value: function length(compare, message) {
			this.rules.push({
				name: "length",
				message: message,
				compare: compare,
				fn: function fn(value) {
					return _range2.default.length(compare, value);
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "uniq",
		value: function uniq(compare, message) {
			this.rules.push({
				name: "uniq",
				message: message,
				compare: compare,
				fn: function fn(value) {
					return value.filter(function (x) {
						return x == compare;
					}).length == 1;
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "allUniq",
		value: function allUniq(message) {
			this.rules.push({
				name: "allUniq",
				message: message,
				fn: function fn(value) {
					return [].concat(_toConsumableArray(new Set(arr))).length == value.length;
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "negative",
		value: function negative(message) {
			this.rules.push({
				name: "negative",
				message: message,
				fn: function fn(value) {
					return _typeof2.default.negative(value);
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "positive",
		value: function positive(message) {
			this.rules.push({
				name: "positive",
				message: message,
				fn: function fn(value) {
					return _typeof2.default.positive(value);
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "blank",
		value: function blank(message) {
			this.rules.push({
				name: "blank",
				message: message,
				fn: function fn(value) {
					return _strings2.default.clear(value) == "";
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "jwt",
		value: function jwt(message) {
			this.rules.push({
				name: "jwt",
				message: message,
				fn: function fn(value) {
					return _regex2.JWT.test(value);
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "ipv4",
		value: function ipv4(message) {
			this.rules.push({
				name: "ipv4",
				message: message,
				fn: function fn(value) {
					return _regex2.IPV4.test(value);
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "http",
		value: function http(message) {
			this.rules.push({
				name: "http",
				message: message,
				fn: function fn(value) {
					return _regex2.HTTP.test(value);
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "ipv6",
		value: function ipv6(message) {
			this.rules.push({
				name: "ipv6",
				message: message,
				fn: function fn(value) {
					return _regex2.IPV6.test(value);
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "creditCard",
		value: function creditCard(message) {
			this.rules.push({
				name: "creditCard",
				message: message,
				fn: function fn(value) {
					return _regex2.CREDIT_CARD.test(value);
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "must",
		value: function must(condition, message) {
			this.rules.push({
				name: "must",
				message: message,
				fn: function fn() {
					return condition;
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "mustBe",
		value: function mustBe(callback, message) {
			this.rules.push({
				name: "mustBe",
				message: message,
				fn: function fn(value) {
					return callback(value);
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "regex",
		value: function regex(_regex, message) {
			this.rules.push({
				name: "creditCard",
				message: message,
				fn: function fn(value) {
					return new RegExp(_regex).test(value);
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "uuid",
		value: function uuid(message) {
			this.rules.push({
				name: "uuid",
				message: message,
				fn: function fn(value) {
					return _regex2.UUID.test(value);
				},
				isValid: false
			});
			return this;
		}
	}, {
		key: "check",
		value: function check(value) {
			var newList = [];
			this.rules = this.rules.map(function (x) {
				var isValid = x.fn(value);
				x.isValid = isValid;
				newList.push(isValid);
				return x;
			});
			return newList.filter(Boolean).length == this.rules.length;
		}
	}], [{
		key: "new",
		value: function _new() {
			return new Rules();
		}
	}, {
		key: "rulesName",
		value: function rulesName() {
			return ["email", "cpf", "cnpj", "array", "isEmpty", "isJson", "isDate", "number", "string", "object", "allUniq", "negative", "positive", "blank", "jwt", "ipv4", "http", "ipv6", "creditCard", "uuid"];
		}
	}]);

	return Rules;
}();

exports.default = Rules;