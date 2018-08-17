export default class JsValidation {
	constructor() {
		this.validations = [];
	}

	validate(name, value, validations) {
		const isValid = validations.check(value);
		this.validations.push({
			name,
			value,
			isValid,
			logs: JSON.stringify([...validations.rules]),
		});
		return this;
	}

	logs() {
		return [...this.validations];
	}

	allRight() {
		return this.logs().filter((element) => element.isValid === true).length === this.logs().length;
	}
}
