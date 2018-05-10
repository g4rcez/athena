const regex = require('../src');
const schema = {
	username: [regex.string, regex.brazilianName]
};
const validate = regex.validate({ username: 'Allan Garcez1' }, schema);
console.log(validate);
// console.log('Is array:', regex.array([5, 3, 43, 12312]));
// console.log('Is array:', regex.array({}));
// console.log(regex.float(121312.4));
// console.log(regex.empty(121312));
// [
// 	'05fc4e21-7c3b-4ac7-8bc8-4c9b416688fc',
// 	'586df7ce-ff4e-404e-a52e-d48cc389d2f7',
// 	'0b789663-b738-4c84-b394-428e4d45c7be',
// 	'8c6140c5-2064-4dae-9859-50e0f0a29e32',
// 	'758eee18-4e0b-4734-bb86-e8ab9dd74e3c',
// 	'b30d8560-ed65-474d-8b36-4a9e9234e131',
// 	'492e6910-14f9-4010-96c8-d5eea854c688',
// 	'00e2310b-b39c-4946-bbbd-4f9061ed3b57',
// 	'521637f3-203a-4e6e-95da-a0beb9f3626f',
// 	'db695c28-cea3-4d09-9d48-99cbd65a561e',
// ].forEach((x) => console.log(x + ' ' + regex.uuid(x)));
// console.log('4000 1234 5678 9010 ' + regex.creditCard('4000 1234 5678 9010'));
// console.log('116.632.837-61 ' + regex.cpf('116.632.837-61'));
// console.log('YES ' + regex.yes('YES'));
// console.log('NÃO ' + regex.no('NÃO'));
// let timestamps = new Date().toString();
// console.log(timestamps + ' ' + regex.timestampsJs(timestamps));
// console.log('29-02-1996' + ' ' + regex.dayMonthYearWithMonthValidation('29-02-1996'));
// [
// 	'74.762.263/0001-74',
// 	'50.253.114/0001-11',
// 	'67.016.638/0001-91',
// 	'33.555.402/0001-01',
// 	'67.660.403/0001-38',
// ].forEach((x) => console.log(x + ' ' + regex.cnpj(x)));
