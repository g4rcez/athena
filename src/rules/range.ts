import { Types as Typeof } from "../utils/Typeof";
const max = (range: number, item: any) => {
  if (Typeof.Array(item) || Typeof.String(item)) {
    return item.length < range;
  } else if (Typeof.Number(item)) {
    return item < range;
  }
  return false;
};
const maxOrEquals = (range: number, item: any) => {
  if (Typeof.Array(item) || Typeof.String(item)) {
    return item.length <= range;
  } else if (Typeof.Number(item)) {
    return item <= range;
  }
  return false;
};
const min = (range: number, item: any) => {
  if (Typeof.Array(item) || Typeof.String(item)) {
    return item.length > range;
  } else if (Typeof.Number(item)) {
    return item > range;
  }
  return false;
};
const minOrEquals = (range: number, item: any) => {
  if (Typeof.Array(item) || Typeof.String(item)) {
    return item.length >= range;
  } else if (Typeof.Number(item)) {
    return item >= range;
  }
  return false;
};
const length = (range: number, item: any) => {
  if (Typeof.Array(item) || Typeof.String(item)) {
    return item.length == range;
  } else if (Typeof.Number(item)) {
    return item == range;
  }
  return false;
};

export default {
  max,
  min,
  length,
  minOrEquals,
  maxOrEquals,
};
