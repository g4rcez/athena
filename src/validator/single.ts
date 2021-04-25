import { Types as Types } from "../utils/Typeof";
import CNPJ from "./../rules/cnpj";
import Collections from "../rules/collections";
import * as Regex from "../rules/regex";
import CPF from "../rules/cpf";

export const Validator = {
  email: (string: string) => Regex.EMAIL.test(string),
  cpf: (string: string) => CPF(string),
  cnpj: (string: string) => CNPJ(string),
  uuid: (string: string) => Regex.UUID.test(string),
  isJson: (string: string) => Types.Json(string),
  isJwt: (string: string) => Regex.JWT.test(string),
  http: (string: string) => Regex.HTTP.test(string),
  ipv4: (string: string) => Regex.IPV4.test(string),
  ipv6: (string: string) => Regex.IPV6.test(string),
  allUniq: (string: Array<any>) => Collections.allUniq(string),
};
