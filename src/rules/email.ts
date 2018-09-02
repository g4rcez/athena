import { EMAIL } from "./regex";

export default (string: string) => {
  return !!string ? EMAIL.test(string) : false;
};
