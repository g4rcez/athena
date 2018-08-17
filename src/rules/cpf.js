import Typeof from "../utils/typeof";
import { CPF } from "./regex";
const verify = (rest) => rest == 10 || rest == 11;
const modRest = (sum) => (sum * 10) % 11;
const cpfStr = (str) =>
	str
		.replace(/-/g, "")
		.replace(/\./g, "")
		.replace("/ /g", "");

const cpf = (str) => {
	if (!Typeof.string(str)) {
		return false;
	}
	if (CPF.test(str)) {
		const cpf = cpfStr(str);
		let check = 0;
		let rest;
		for (let i = 1; i <= 9; i++) {
			check = check + parseInt(cpf.substring(i - 1, i)) * (11 - i);
		}
		rest = modRest(check);
		if (verify(rest)) {
			rest = 0;
		}
		if (rest != parseInt(cpf.substring(9, 10))) {
			return false;
		}
		check = 0;
		for (let i = 1; i <= 10; i++) {
			check = check + parseInt(cpf.substring(i - 1, i)) * (12 - i);
		}
		rest = modRest(check);
		if (verify(rest)) {
			rest = 0;
		}
		return rest != parseInt(cpf.substring(10, 11)) ? false : true;
	}
	return false;
};

export default cpf;
