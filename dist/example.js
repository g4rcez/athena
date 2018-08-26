"use strict";

var _index = require("./index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Validation = new _index2.default.Validator();
var Rules = function Rules() {
	return _index2.default.Rules.new();
};

Validation.validate({ name: "cpf", value: "070.680.938-68" }).validate({ name: "email", value: "vandal.vnl.dev@gmail.com" }).validate({ name: "range", value: "AA", rules: Rules().minOrEquals(2) }).validate({ name: "blank", value: " " }).validate({ name: "isEmpty", value: {} }).validate({
	name: "mustBe",
	value: "Name",
	rules: Rules().mustBe(function (x) {
		return x === "Name";
	}, "Valor diferente do esperado")
}).validate({ name: "equals", value: [1], rules: Rules().equals([1]) }).validate({ name: "cnpj", value: "05.144.757/0001-72", rules: Rules().cnpj("CNPJ Inválido") }).validate({ name: "ipv4", value: "192.168.1.133" }).validate({ name: "isDate", value: "2018-08-29" }).validate({ name: "range", value: [1, 2, 3, 3, 4], rules: Rules().max(6) }).validate({ name: "array", value: [1, 2, 3, 3, 4] }).validate({ name: "unique", value: [1, 2, 3, 4, 5, 6, 7, 8, 8], rules: Rules().uniq(1) }).validate({ name: "object", value: { foo: { bar: "foobar" } } });
console.log(JSON.stringify(Validation.msgErrors(), null, 4));
console.log(Validation.allRight());