import { CPNJ } from "./regex";

const Cnpj = (string) => {
	if (CPNJ.test(string)) {
		let verifies = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
		let cnpj = string.replace(/[^\d]/g, "");
		if (cnpj == "00000000000000") {
			return false;
		}
		let n = 0;
		for (let i = 0; i < 12; n += cnpj[i] * verifies[++i]);
		if (cnpj[12] != ((n %= 11) < 2 ? 0 : 11 - n)) {
			return false;
		}
		for (let i = 0, n = 0; i <= 12; n += cnpj[i] * verifies[i++]);
		return cnpj[13] != ((n %= 11) < 2 ? 0 : 11 - n);
	}
	return false;
};
export default Cnpj;
