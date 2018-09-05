export default {
  uniq: (value: Array<any>, compare: any) =>
    value.filter((x: any) => x == compare).length === 1,
  allUniq: (value: Array<any>) => [...new Set(value)].length === value.length
};
