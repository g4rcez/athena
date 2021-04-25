export const Types = {
  IsType: (t: any, c: any) =>
    c.constructor === t && c !== undefined && ![undefined].includes(c),
  Number: (n: any) => Types.IsType(Number, n),
  Integer: (s: any) => Types.IsType(Number, s),
  Float: (f: any) => Types.IsType(Number, f) && f % 1 !== 0,
  String: (s: any) => Types.IsType(String, s),
  Array: (a: any) => Array.isArray(a),
  Positive: (n: any) => Types.Number(n) && n > 0,
  Negative: (n: any) => Types.Number(n) && n < 0,
  Json: (n: any) => {
    try {
      JSON.parse(n);
      return true;
    } catch (error) {
      return false;
    }
  },
  Object: (obj: any) =>
    Object(obj) === obj && typeof obj === "object" && !Array.isArray(obj),
};
