import Validator from "./validator";
import Rules from "./rules";
import UniqValidator, { IUniqValidator } from "./validator/single";

export default class Athena {
  static validator(): Validator {
    return new Validator();
  }

  static rules(): Rules {
    return new Rules();
  }

  static uniqValidator(): object {
    return { ...UniqValidator };
  }
}
