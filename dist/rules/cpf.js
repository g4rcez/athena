"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = require("../utils/typeof");

var _typeof2 = _interopRequireDefault(_typeof);

var _regex = require("./regex");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var verify = function verify(rest) {
	return rest == 10 || rest == 11;
};
var modRest = function modRest(sum) {
	return sum * 10 % 11;
};
var cpfStr = function cpfStr(str) {
	return str.replace(/-/g, "").replace(/\./g, "").replace("/ /g", "");
};

var cpf = function cpf(str) {
	if (!_typeof2.default.string(str)) {
		return false;
	}
	if (_regex.CPF.test(str)) {
		var _cpf = cpfStr(str);
		var check = 0;
		var rest = void 0;
		for (var i = 1; i <= 9; i++) {
			check = check + parseInt(_cpf.substring(i - 1, i)) * (11 - i);
		}
		rest = modRest(check);
		if (verify(rest)) {
			rest = 0;
		}
		if (rest != parseInt(_cpf.substring(9, 10))) {
			return false;
		}
		check = 0;
		for (var _i = 1; _i <= 10; _i++) {
			check = check + parseInt(_cpf.substring(_i - 1, _i)) * (12 - _i);
		}
		rest = modRest(check);
		if (verify(rest)) {
			rest = 0;
		}
		return rest != parseInt(_cpf.substring(10, 11)) ? false : true;
	}
	return false;
};

exports.default = cpf;