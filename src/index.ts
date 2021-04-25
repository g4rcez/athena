import Rule from "./rules";
import { Validation } from "./validator";

export const Validator = new Validation();
export const Rules = () => new Rule();

const cpf = Rules().cpf("Error on CPF");

console.log(
  Validator.validate({ name: "cpf", value: "aaa", rules: cpf }).msgErrors()
);
