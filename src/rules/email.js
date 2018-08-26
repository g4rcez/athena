import { EMAIL } from "./regex";

export default (string) => {
	return !!string ? EMAIL.test(string) : false;
};
