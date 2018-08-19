export default class JsValidation {
	constructor() {
		this.validations = [];
	}

	validate(name, value, validations) {
		this.validations.push({
			name,
			value,
			isValid: validations.check(value),
			logs: [...validations.rules],
		});
		return this;
	}

	logs() {
		return [...this.validations];
	}
	msgErrors(separator = "\t") {
		const errors = {};
		this.logs().forEach((x) => {
			const message = x.logs
				.filter((y) => !y.isValid)
				.filter((x) => !x.isValid)
				.reduce((acc, el) => acc + `${separator}${el.message}`, []);
			if (message != "") {
				errors[x.name] = message.trim().split(separator);
			}
		});
		return errors;
	}
	allRight() {
		return this.filter().length === this.logs().length;
	}
	hasErrors() {
		return this.filter().length !== this.logs().length;
	}
	filter() {
		return this.logs().filter((element) => element.isValid === true);
	}
}
