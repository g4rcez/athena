const types = {
  isType: (t: any, c: any) =>
    c.constructor === t && c !== undefined && ![undefined].includes(c),
  number: (n: any) => types.isType(Number, n),
  integer: (s: any) => types.isType(Number, s),
  float: (f: any) => types.isType(Number, f) && f % 1 !== 0,
  string: (s: any) => types.isType(String, s),
  array: (a: any) => Array.isArray(a),
  positive: (n: any) => types.number(n) && n > 0,
  negative: (n: any) => types.number(n) && n < 0,
  isJson: (n: any) => {
    try {
      JSON.parse(n);
      return true;
    } catch (error) {
      return false;
    }
  },
  isObject: (obj: any) =>
    Object(obj) === obj && typeof obj === "object" && !Array.isArray(obj)
};

export default types;
