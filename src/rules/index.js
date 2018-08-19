import Cpf from "./cpf";
import Range from "./range";
import Email from "./email";
import moment from "moment";
import { JWT, IPV4, IPV6, HTTP, CREDIT_CARD } from "./regex";
import Typeof from "../utils/typeof";
import { equals as rEquals, isEmpty as rEmpty } from "ramda";
import Strings from "../utils/strings";
export default class Rules {
	constructor() {
		this.rules = [];
	}
	static new() {
		return new Rules();
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
			name: "startsWith",
			message,
			compare,
			fn: (value) => new RegExp(`^${compare}`).test(value),
			isValid: false,
		});
		return this;
	}
	endsWith(compare, message) {
		this.rules.push({
			name: "endsWith",
			message,
			compare,
			fn: (value) => new RegExp(`${compare}$`).test(value),
			isValid: false,
		});
		return this;
	}
	isJson(message) {
		this.rules.push({
			name: "isJson",
			message,
			compare,
			fn: (value) => Typeof.isJson(value),
			isValid: false,
		});
		return this;
	}
	isDate(message) {
		this.rules.push({
			name: "isDate",
			message,
			fn: (value) => moment(value).isValid(),
			isValid: false,
		});
		return this;
	}
	isAfterDate(after, message) {
		this.rules.push({
			name: "isDate",
			message,
			compare: after,
			fn: (value) => moment(value).isAfter(after),
			isValid: false,
		});
		return this;
	}
	isBeforeDate(before, message) {
		this.rules.push({
			name: "isDate",
			message,
			compare: before,
			fn: (value) => moment(value).isBefore(before),
			isValid: false,
		});
		return this;
	}
	number(message) {
		this.rules.push({
			name: "number",
			message,
			fn: (value) => Typeof.number(value),
			isValid: false,
		});
		return this;
	}
	string(message) {
		this.rules.push({
			name: "string",
			message,
			fn: (value) => Typeof.string(value),
			isValid: false,
		});
		return this;
	}
	object(message) {
		this.rules.push({
			name: "object",
			message,
			fn: (value) => Typeof.isObject(value),
			isValid: false,
		});
		return this;
	}
	max(compare, message) {
		this.rules.push({
			name: "max",
			message,
			compare,
			fn: (value) => Range.max(compare, value),
			isValid: false,
		});
		return this;
	}
	min(compare, message) {
		this.rules.push({
			name: "min",
			message,
			compare,
			fn: (value) => Range.min(compare, value),
			isValid: false,
		});
		return this;
	}
	minOrEquals(compare, message) {
		this.rules.push({
			name: "minOrEquals",
			message,
			compare,
			fn: (value) => Range.minOrEquals(compare, value),
			isValid: false,
		});
		return this;
	}
	maxOrEquals(compare, message) {
		this.rules.push({
			name: "maxOrEquals",
			message,
			compare,
			fn: (value) => Range.maxOrEquals(compare, value),
			isValid: false,
		});
		return this;
	}
	length(compare, message) {
		this.rules.push({
			name: "length",
			message,
			compare,
			fn: (value) => Range.length(compare, value),
			isValid: false,
		});
		return this;
	}
	uniq(compare, message) {
		this.rules.push({
			name: "uniq",
			message,
			compare,
			fn: (value) => value.filter((x) => x == compare).length == 1,
			isValid: false,
		});
		return this;
	}
	allUniq(message) {
		this.rules.push({
			name: "allUniq",
			message,
			fn: (value) => [...new Set(arr)].length == value.length,
			isValid: false,
		});
		return this;
	}
	negative(message) {
		this.rules.push({
			name: "negative",
			message,
			fn: (value) => Typeof.negative(value),
			isValid: false,
		});
		return this;
	}
	positive(message) {
		this.rules.push({
			name: "positive",
			message,
			fn: (value) => Typeof.positive(value),
			isValid: false,
		});
		return this;
	}
	blank(message) {
		this.rules.push({
			name: "blank",
			message,
			fn: (value) => Strings.clear(value) == "",
			isValid: false,
		});
		return this;
	}
	jwt(message) {
		this.rules.push({
			name: "jwt",
			message,
			fn: (value) => JWT.test(value),
			isValid: false,
		});
		return this;
	}
	ipv4(message) {
		this.rules.push({
			name: "ipv4",
			message,
			fn: (value) => IPV4.test(value),
			isValid: false,
		});
		return this;
	}
	http(message) {
		this.rules.push({
			name: "http",
			message,
			fn: (value) => HTTP.test(value),
			isValid: false,
		});
		return this;
	}
	ipv6(message) {
		this.rules.push({
			name: "ipv6",
			message,
			fn: (value) => IPV6.test(value),
			isValid: false,
		});
		return this;
	}
	creditCard(message) {
		this.rules.push({
			name: "creditCard",
			message,
			fn: (value) => CREDIT_CARD.test(value),
			isValid: false,
		});
		return this;
	}
	must(condition, message) {
		this.rules.push({
			name: "creditCard",
			message,
			fn: () => condition,
			isValid: false,
		});
		return this;
	}
	mustBe(callback, message) {
		this.rules.push({
			name: "creditCard",
			message,
			fn: (value) => callback(value),
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
