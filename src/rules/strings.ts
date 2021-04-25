import Strings from "../utils/Strings";

export default {
  blank: (value: string) => Strings.Strip(value) === "",
};
