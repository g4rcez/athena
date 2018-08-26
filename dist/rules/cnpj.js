"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regex = require("./regex");

var Cnpj = function Cnpj(string) {
	if (_regex.CPNJ.test(string)) {
		var verifies = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
		var cnpj = string.replace(/[^\d]/g, "");
		if (cnpj == "00000000000000") {
			return false;
		}
		var n = 0;
		for (var i = 0; i < 12; n += cnpj[i] * verifies[++i]) {}
		if (cnpj[12] != ((n %= 11) < 2 ? 0 : 11 - n)) {
			return false;
		}
		for (var _i = 0, _n = 0; _i <= 12; _n += cnpj[_i] * verifies[_i++]) {}
		return cnpj[13] != ((n %= 11) < 2 ? 0 : 11 - n);
	}
	return false;
};
exports.default = Cnpj;