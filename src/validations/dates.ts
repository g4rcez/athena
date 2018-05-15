import regex from './regex';

let withDay: RegExp = regex.dayMonthYearWithMonthValidation;
let withMonth: RegExp = regex.monthDayYearWithMonthValidation;

const getYear = (date: string = '') => date.split(new RegExp('(/|-| )')).pop();
const yearToInt = (year: string = '') => {
	let intYear: number = 1;
	try {
		let tmp: string = !!intYear ? intYear.toString() : '';
		intYear = parseInt(tmp);
	} catch (error) {}
	return intYear % 4 === 0;
};

const dates = {
	leapYear: (date: string) => {
		return !!date.match(withDay) || !!date.match(withMonth) ? yearToInt(getYear(date)) : false;
	},
};

export default dates;
