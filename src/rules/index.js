import Cpf from "./cpf";
import Email from "./email";
import Typeof from "../utils/typeof";
import { equals as rEquals, isEmpty as rEmpty } from "ramda";
import moment from "moment";
export default class Rules {
	constructor() {
		this.rules = [];
	}
	email(message) {
		this.rules.push({
			name: "email",
			message: message,
			fn: (string) => Email(string),
			isValid: false,
		});
		return this;
	}

	cpf(message) {
		this.rules.push({
			name: "cpf",
			message: message,
			fn: (string) => Cpf(string),
			isValid: false,
		});
		return this;
	}

	array(message) {
		this.rules.push({
			name: "array",
			message: message,
			fn: (arr) => Typeof.array(arr),
			isValid: false,
		});
		return this;
	}

	isEmpty(message) {
		this.rules.push({
			name: "isEmpty",
			message,
			fn: (arr) => rEmpty(arr),
			isValid: false,
		});
		return this;
	}

	equals(compare, message) {
		this.rules.push({
			name: "equals",
			message,
			compare,
			fn: (value) => rEquals(compare, value),
			isValid: false,
		});
		return this;
	}

	startsWith(compare, message) {
		this.rules.push({
			name: "equals",
			message,
			compare,
			fn: (value) => new RegExp(`^${compare}`).test(value),
			isValid: false,
		});
		return this;
	}

	endsWith(compare, message) {
		this.rules.push({
			name: "equals",
			message,
			compare,
			fn: (value) => new RegExp(`${compare}$`).test(value),
			isValid: false,
		});
		return this;
	}

	isJson(message) {
		this.rules.push({
			name: "equals",
			message,
			compare,
			fn: (value) => Typeof.isJson(value),
			isValid: false,
		});
		return this;
	}

	isDate(message) {
		this.rules.push({
			name: "equals",
			message,
			fn: (value) => moment(value).isValid(),
			isValid: false,
		});
		return this;
	}

	check(value) {
		const newList = [];
		this.rules = this.rules.map((x) => {
			const isValid = x.fn(value);
			x.isValid = isValid;
			newList.push(isValid);
			return x;
		});
		return newList.filter(Boolean).length == this.rules.length;
	}
}
