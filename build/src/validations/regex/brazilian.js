"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    brazilianName: /^[A-ZÇa-zç 'ÁÉÍÓÚáéíóúÀÈÌÒÙàèìòùÃẼĨÕŨãẽĩõũ]{1,205}$/,
    cep: /^\d{5}(|-| )\d{3}$/,
    cpf: /^((\d{3})(|\.)){2}(\d{3})(|-)\d{2}$/,
    rg: /^([A-Z]{2}|\d{1,3})(|-)\d{2}((|\.)\d{3}){2}$/,
    brazilianCellphone: /^(|(|\+55)(| )(0(| )\d{2}|\d{2})(| ))9(| )\d{4}(| |-| - )\d{4}$/,
    brazilianCellphoneWithoutDDD: /^(|0\d{2}|\d{2})(| )\d{4}(| |-| - )\d{4}$/,
    brazilianCarPlate: /^[A-Za-z]{3}(| | - |-)\d{4}$/,
    cnpj: /^\d{2}((|\.)\d{3}){2}(|\/)\d{4}(|-)\d{2}$/,
};
