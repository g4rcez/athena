import tryCatch from "../exceptions";

const schemaParser = (isArray: Function) => {
  return (path: string, schema: object, object: object) => {
    const val = eval(Object.keys({ schema })[0] + "." + path);
    const fns = eval(Object.keys({ object })[0] + "." + path);
    if (isArray(val)) {
      let values = val.map(
        x => (isArray(fns) ? fns.map(fn => tryCatch(fn, x)) : tryCatch(fns, x))
      );
      try {
        values = values.map(x => x.filter(Boolean).length === x.length);
      } catch (e) {}
      return values.filter(Boolean).length === val.length;
    }
    const fnArr = isArray(fns)
      ? fns.map(x => tryCatch(x, val))
      : tryCatch(fns, val);
    try {
      return fnArr.length === fnArr.filter(Boolean).length;
    } catch (e) {}
    return fnArr;
  };
};

export default schemaParser;
