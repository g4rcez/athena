import Validator from "./validator";
import Rules from "./rules";
export default class Athena {
    static validator(): Validator;
    static rules(): Rules;
    static uniqValidator(): object;
}
