import Rules from "../rules";
import { has } from "ramda";

export class Validation {
  private validations: Array<any>;
  constructor() {
    this.validations = [];
  }

  validate(object: any) {
    let rules: any;
    if (!has("rules")(object)) {
      for (const method of Rules.rulesName()) {
        if (method.toLowerCase() === object.name.toLowerCase()) {
          rules = Rules.new();
          rules = rules[method]();
        }
      }
    } else {
      rules = object.rules;
    }
    this.validations.push({
      name: object.name,
      value: object.value,
      isValid: rules.check(object.value),
      logs: [...rules.$rules],
    });
    return this;
  }

  logs() {
    return [...this.validations];
  }
  msgErrors() {
    const errors: any = {};
    this.logs().forEach((x) => {
      const message = x.logs
        .filter((y: any) => !y.isValid)
        .filter((x: any) => !x.isValid)
        .reduce((acc: Array<string>, el: any) => acc + `${el.message} `, []);
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
