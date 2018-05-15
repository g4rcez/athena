export {};

const maskError = (cpf) => `${cpf} mask error`;

const algoError = (cpf) => `${cpf} value error`;

module.exports = { algoError, maskError };
