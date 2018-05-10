const regex = require('./regex');

let withDay = regex.dayMonthYearWithMonthValidation;
let withMonth = regex.monthDayYearWithMonthValidation;

const dates = {
	leapYear: (date) => {
		return !!date.match(withDay) || !!date.match(withMonth)
			? parseInt(date.split(new RegExp('(/|-| )')).pop()) % 4 === 0
			: false;
	},
};

module.exports = dates;
