import Typeof from "../utils/Typeof";
const max = (range: number, item: any) => {
  if (Typeof.array(item) || Typeof.string(item)) {
    return item.length < range;
  } else if (Typeof.number(item)) {
    return item < range;
  }
  return false;
};
const maxOrEquals = (range: number, item: any) => {
  if (Typeof.array(item) || Typeof.string(item)) {
    return item.length <= range;
  } else if (Typeof.number(item)) {
    return item <= range;
  }
  return false;
};
const min = (range: number, item: any) => {
  if (Typeof.array(item) || Typeof.string(item)) {
    return item.length > range;
  } else if (Typeof.number(item)) {
    return item > range;
  }
  return false;
};
const minOrEquals = (range: number, item: any) => {
  if (Typeof.array(item) || Typeof.string(item)) {
    return item.length >= range;
  } else if (Typeof.number(item)) {
    return item >= range;
  }
  return false;
};
const length = (range: number, item: any) => {
  if (Typeof.array(item) || Typeof.string(item)) {
    return item.length == range;
  } else if (Typeof.number(item)) {
    return item == range;
  }
  return false;
};

export default {
  max,
  min,
  length,
  minOrEquals,
  maxOrEquals
};
