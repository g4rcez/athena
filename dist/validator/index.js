"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rules = require("../rules");

var _rules2 = _interopRequireDefault(_rules);

var _ramda = require("ramda");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JsValidation = function () {
	function JsValidation() {
		_classCallCheck(this, JsValidation);

		this.validations = [];
	}

	_createClass(JsValidation, [{
		key: "validate",
		value: function validate(object) {
			var rules = void 0;
			if (!(0, _ramda.has)("rules")(object)) {
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = _rules2.default.rulesName()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var method = _step.value;

						if (method.toLowerCase() === object.name.toLowerCase()) {
							rules = _rules2.default.new()[method]();
						}
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			} else {
				rules = object.rules;
			}
			this.validations.push({
				name: object.name,
				value: object.value,
				isValid: rules.check(object.value),
				logs: [].concat(_toConsumableArray(rules.rules))
			});
			return this;
		}
	}, {
		key: "logs",
		value: function logs() {
			return [].concat(_toConsumableArray(this.validations));
		}
	}, {
		key: "msgErrors",
		value: function msgErrors() {
			var errors = {};
			this.logs().forEach(function (x) {
				var message = x.logs.filter(function (y) {
					return !y.isValid;
				}).filter(function (x) {
					return !x.isValid;
				}).reduce(function (acc, el) {
					return acc + (el.message + " ");
				}, []);
				if (message != "") {
					errors[x.name] = message.trim();
				}
			});
			return errors;
		}
	}, {
		key: "allRight",
		value: function allRight() {
			return this.filter().length === this.logs().length;
		}
	}, {
		key: "hasErrors",
		value: function hasErrors() {
			return this.filter().length !== this.logs().length;
		}
	}, {
		key: "filter",
		value: function filter() {
			return this.logs().filter(function (element) {
				return element.isValid === true;
			});
		}
	}]);

	return JsValidation;
}();

exports.default = JsValidation;