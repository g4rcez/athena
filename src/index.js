const validation = require('./validations');
let actions = { cpf: function() {}, isValid: function() {} };

actions.cpf = (x) => Cpf(x);

actions.isValid = function(string, validationType) {
	return string === undefined ? false : actions[validationType](string);
};

module.exports = validation;
