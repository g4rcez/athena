import Cpf from "./cpf";
import Cnpj from "./cnpj";
import Dates from "./date";
import Range from "./range";
import Email from "./email";
import { Types } from "../utils/Typeof";
import Strings from "./strings";
import Collections from "./collections";
import { equals as rEquals, isEmpty as rEmpty } from "ramda";
import { JWT, IPV4, IPV6, HTTP, CREDIT_CARD, UUID } from "./regex";
export default class Rules {
  private rules: Array<any>;
  constructor() {
    this.rules = [];
  }

  public get $rules(): Array<any> {
    return this.rules;
  }

  public set $rules(value: Array<any>) {
    this.rules = value;
  }

  static new() {
    return new Rules();
  }

  static rulesName() {
    return [
      "email",
      "cpf",
      "cnpj",
      "array",
      "isEmpty",
      "isJson",
      "isDate",
      "number",
      "string",
      "object",
      "allUniq",
      "negative",
      "positive",
      "blank",
      "jwt",
      "ipv4",
      "http",
      "ipv6",
      "creditCard",
      "uuid",
    ];
  }

  email(message: string) {
    this.rules.push({
      name: "email",
      message: message,
      fn: (string: string) => Email(string),
      isValid: false,
    });
    return this;
  }
  cpf(message: string) {
    this.rules.push({
      name: "cpf",
      message: message,
      fn: (string: string) => Cpf(string),
      isValid: false,
    });
    return this;
  }
  cnpj(message: string) {
    this.rules.push({
      name: "cnpj",
      message: message,
      fn: (string: string) => Cnpj(string),
      isValid: false,
    });
    return this;
  }
  array(message: string) {
    this.rules.push({
      name: "array",
      message: message,
      fn: (arr: Array<any>) => Types.Array(arr),
      isValid: false,
    });
    return this;
  }
  isEmpty(message: string) {
    this.rules.push({
      name: "isEmpty",
      message,
      fn: (arr: any) => rEmpty(arr),
      isValid: false,
    });
    return this;
  }
  equals(compare: any, message: string) {
    this.rules.push({
      name: "equals",
      message,
      compare,
      fn: (value: string) => rEquals(compare, value),
      isValid: false,
    });
    return this;
  }
  startsWith(compare: any, message: string) {
    this.rules.push({
      name: "startsWith",
      message,
      compare,
      fn: (value: string) => new RegExp(`^${compare}`).test(value),
      isValid: false,
    });
    return this;
  }
  endsWith(compare: any, message: string) {
    this.rules.push({
      name: "endsWith",
      message,
      compare,
      fn: (value: string) => new RegExp(`${compare}$`).test(value),
      isValid: false,
    });
    return this;
  }
  isJson(message: string) {
    this.rules.push({
      name: "isJson",
      message,
      fn: (value: string) => Types.Json(value),
      isValid: false,
    });
    return this;
  }
  isDate(message: string) {
    this.rules.push({
      name: "isDate",
      message,
      fn: (value: string) => Dates.isDate(value),
      isValid: false,
    });
    return this;
  }
  isAfterDate(after: any, message: string) {
    this.rules.push({
      name: "isAfterDate",
      message,
      compare: after,
      fn: (value: string) => Dates.isAfterDate(value, after),
      isValid: false,
    });
    return this;
  }
  isBeforeDate(before: any, message: string) {
    this.rules.push({
      name: "isBeforeDate",
      message,
      compare: before,
      fn: (value: string) => Dates.isAfterDate(value, before),
      isValid: false,
    });
    return this;
  }
  number(message: string) {
    this.rules.push({
      name: "number",
      message,
      fn: (value: string) => Types.Number(value),
      isValid: false,
    });
    return this;
  }
  string(message: string) {
    this.rules.push({
      name: "string",
      message,
      fn: (value: string) => Types.String(value),
      isValid: false,
    });
    return this;
  }
  object(message: string) {
    this.rules.push({
      name: "object",
      message,
      fn: (value: string) => Types.Object(value),
      isValid: false,
    });
    return this;
  }
  max(compare: number, message: string) {
    this.rules.push({
      name: "max",
      message,
      compare,
      fn: (value: string) => Range.max(compare, value),
      isValid: false,
    });
    return this;
  }
  min(compare: number, message: string) {
    this.rules.push({
      name: "min",
      message,
      compare,
      fn: (value: string) => Range.min(compare, value),
      isValid: false,
    });
    return this;
  }
  minOrEquals(compare: number, message: string) {
    this.rules.push({
      name: "minOrEquals",
      message,
      compare,
      fn: (value: string) => Range.minOrEquals(compare, value),
      isValid: false,
    });
    return this;
  }
  maxOrEquals(compare: number, message: string) {
    this.rules.push({
      name: "maxOrEquals",
      message,
      compare,
      fn: (value: string) => Range.maxOrEquals(compare, value),
      isValid: false,
    });
    return this;
  }
  length(compare: number, message: string) {
    this.rules.push({
      name: "length",
      message,
      compare,
      fn: (value: string) => Range.length(compare, value),
      isValid: false,
    });
    return this;
  }
  uniq(compare: any, message: string) {
    this.rules.push({
      name: "uniq",
      message,
      compare,
      fn: (value: Array<any>) => Collections.uniq(value, compare),
      isValid: false,
    });
    return this;
  }
  allUniq(message: string) {
    this.rules.push({
      name: "allUniq",
      message,
      fn: (value: Array<any>) => Collections.allUniq(value),
      isValid: false,
    });
    return this;
  }
  negative(message: string) {
    this.rules.push({
      name: "negative",
      message,
      fn: (value: string) => Types.Negative(value),
      isValid: false,
    });
    return this;
  }
  positive(message: string) {
    this.rules.push({
      name: "positive",
      message,
      fn: (value: string) => Types.Positive(value),
      isValid: false,
    });
    return this;
  }
  blank(message: string) {
    this.rules.push({
      name: "blank",
      message,
      fn: (value: string) => Strings.blank(value),
      isValid: false,
    });
    return this;
  }
  jwt(message: string) {
    this.rules.push({
      name: "jwt",
      message,
      fn: (value: string) => JWT.test(value),
      isValid: false,
    });
    return this;
  }
  ipv4(message: string) {
    this.rules.push({
      name: "ipv4",
      message,
      fn: (value: string) => IPV4.test(value),
      isValid: false,
    });
    return this;
  }
  http(message: string) {
    this.rules.push({
      name: "http",
      message,
      fn: (value: string) => HTTP.test(value),
      isValid: false,
    });
    return this;
  }
  ipv6(message: string) {
    this.rules.push({
      name: "ipv6",
      message,
      fn: (value: string) => IPV6.test(value),
      isValid: false,
    });
    return this;
  }
  creditCard(message: string) {
    this.rules.push({
      name: "creditCard",
      message,
      fn: (value: string) => CREDIT_CARD.test(value),
      isValid: false,
    });
    return this;
  }
  must(condition: boolean, message: string) {
    this.rules.push({
      name: "must",
      message,
      fn: () => condition,
      isValid: false,
    });
    return this;
  }
  mustBe(callback: Function, message: string) {
    this.rules.push({
      name: "mustBe",
      message,
      fn: (value: string) => callback(value),
      isValid: false,
    });
    return this;
  }
  regex(regex: string | RegExp, message: string) {
    this.rules.push({
      name: "creditCard",
      message,
      fn: (value: string) => new RegExp(regex).test(value),
      isValid: false,
    });
    return this;
  }
  uuid(message: string) {
    this.rules.push({
      name: "uuid",
      message,
      fn: (value: string) => UUID.test(value),
      isValid: false,
    });
    return this;
  }
  check(value: any) {
    const newList: Array<boolean> = [];
    this.rules = this.rules.map((x) => {
      const isValid = x.fn(value);
      x.isValid = isValid;
      newList.push(isValid);
      return x;
    });
    return newList.filter(Boolean).length == this.rules.length;
  }
}
