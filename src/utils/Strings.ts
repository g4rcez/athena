import { Types } from "./Typeof";

const strip = (string: string) =>
  Types.String(string)
    ? string
        .replace(/ /g, "")
        .replace(/\t/g, "")
        .replace(/\n/g, "")
        .replace(/\r/g, "")
    : "";

export default { Strip: strip };
