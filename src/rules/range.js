import Typeof from "../utils/typeof";
const max = (range, item) => {
	if (Typeof.array(item) || Typeof.string(item)) {
		return item.length < range;
	} else if (Typeof.number(item)) {
		return item < range;
	}
	return false;
};
const maxOrEquals = (range, item) => {
	if (Typeof.array(item) || Typeof.string(item)) {
		return item.length <= range;
	} else if (Typeof.number(item)) {
		return item <= range;
	}
	return false;
};
const min = (range, item) => {
	if (Typeof.array(item) || Typeof.string(item)) {
		return item.length > range;
	} else if (Typeof.number(item)) {
		return item > range;
	}
	return false;
};
const minOrEquals = (range, item) => {
	if (Typeof.array(item) || Typeof.string(item)) {
		return item.length >= range;
	} else if (Typeof.number(item)) {
		return item >= range;
	}
	return false;
};
const length = (range, item) => {
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
	maxOrEquals,
};
