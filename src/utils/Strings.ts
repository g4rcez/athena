import Typeof from "./Typeof";
const clear = (string: string) =>
  Typeof.string(string)
    ? string
        .replace(/ /g, "")
        .replace(/\t/g, "")
        .replace(/\n/g, "")
        .replace(/\r/g, "")
    : "";

export default {
  clear
};
