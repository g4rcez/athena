import Rules from "../rules";
import { has } from "ramda";
export default class JsValidation {
	constructor() {
		this.validations = [];
	}

	validate(object) {
		let rules;
		if (!has("rules")(object)) {
			for (let method of Rules.rulesName()) {
				if (method.toLowerCase() === object.name.toLowerCase()) {
					rules = Rules.new()[method]();
				}
			}
		} else {
			rules = object.rules;
		}
		this.validations.push({
			name: object.name,
			value: object.value,
			isValid: rules.check(object.value),
			logs: [...rules.rules],
		});
		return this;
	}

	logs() {
		return [...this.validations];
	}
	msgErrors() {
		const errors = {};
		this.logs().forEach((x) => {
			const message = x.logs
				.filter((y) => !y.isValid)
				.filter((x) => !x.isValid)
				.reduce((acc, el) => acc + `${el.message} `, []);
			if (message != "") {
				errors[x.name] = message.trim();
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
