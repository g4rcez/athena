"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regex_1 = require("./regex");
const Cnpj = (string) => {
    if (regex_1.CPNJ.test(string)) {
        const verifies = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        const cnpj = string.replace(/[^\d]/g, "");
        if (cnpj == "00000000000000") {
            return false;
        }
        let n = 0;
        for (let i = 0; i < 12; n += parseInt(cnpj[i], 10) * verifies[++i])
            ;
        if (parseInt(cnpj[12], 10) != ((n %= 11) < 2 ? 0 : 11 - n)) {
            return false;
        }
        for (let i = 0, n = 0; i <= 12; n += parseInt(cnpj[i], 10) * verifies[i++])
            ;
        return parseInt(cnpj[13], 10) != ((n %= 11) < 2 ? 0 : 11 - n);
    }
    return false;
};
exports.default = Cnpj;
//# sourceMappingURL=cnpj.js.map