import Typeof from "./typeof";
const clear = (string) =>
	Typeof.string(string)
		? string
				.replace(/ /g, "")
				.replace(/\t/g, "")
				.replace(/\n/g, "")
				.replace(/\r/g, "")
		: "";

export default {
	clear,
};
