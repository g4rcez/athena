export {};
const regex = require('./regex');

let withDay: RegExp = regex.dayMonthYearWithMonthValidation;
let withMonth: RegExp = regex.monthDayYearWithMonthValidation;
let monthInt = 0;

let splitDate = (date) => date.split(new RegExp('(/|-| )'));

let februaryException = (date: string, mod: boolean) => {
	let monthCondition: boolean = false;
	let maxDay = 29;
	mod ? null : (maxDay = 28);
	let compare = (date: string, indexDate, indexMonth) =>
		parseInt(splitDate(date)[indexDate]) === 2 && parseInt(splitDate(date)[indexMonth]) <= maxDay;
	if (!!date.match(withDay)) {
		return mod ? compare(date, 1, 0) : compare(date, 1, 0);
	} else if (!!date.match(withMonth)) {
		return mod ? compare(date, 0, 1) : compare(date, 1, 0);
	}
	return mod;
};

const getYear = (date: string = '') => splitDate(date).pop();
const yearToInt = (year: string = '', date: string = '') => {
	let intYear: number = 1;
	try {
		let tmp: string = !!intYear ? intYear.toString() : '';
		intYear = parseInt(tmp);
	} catch (error) {}
	return februaryException(date, intYear % 4 === 0);
};

const dates = {
	leapYear: (date: string) => {
		return !!date.match(withDay) || !!date.match(withMonth) ? yearToInt(getYear(date), date) : false;
	},
};

module.exports = dates;
