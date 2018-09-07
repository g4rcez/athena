import Typeof from "../utils/Typeof";
import CPNJ from "./../rules/cnpj";
import Collections from "../rules/collections";
import * as Regex from "../rules/regex";
import CPF from "../rules/cpf";
const email = (string: string) => Regex.EMAIL.test(string);
const cpf = (string: string) => CPF(string);
const cnpj = (string: string) => CPNJ(string);
const uuid = (string: string) => Regex.UUID.test(string);
const isJson = (string: string) => Typeof.isJson(string);
const isJwt = (string: string) => Regex.JWT.test(string);
const http = (string: string) => Regex.HTTP.test(string);
const ipv4 = (string: string) => Regex.IPV4.test(string);
const ipv6 = (string: string) => Regex.IPV6.test(string);
const allUniq = (string: Array<any>) => Collections.allUniq(string);

export interface IUniqValidator {
  email(): boolean;
  cpf(): boolean;
  cnpj(): boolean;
  uuid(): boolean;
  isJson(): boolean;
  isJwt(): boolean;
  http(): boolean;
  ipv4(): boolean;
  ipv6(): boolean;
  allUniq(): boolean;
}

export default {
  email,
  cpf,
  cnpj,
  uuid,
  isJson,
  isJwt,
  http,
  ipv4,
  ipv6,
  allUniq
};
