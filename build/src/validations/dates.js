"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __importDefault(require("./regex/common"));
let withDay = common_1.default.dayMonthYearWithMonthValidation;
let withMonth = common_1.default.monthDayYearWithMonthValidation;
let monthInt = 0;
let splitDate = (date) => date.split(new RegExp('(/|-| )'));
let februaryException = (date, mod) => {
    let monthCondition = false;
    let maxDay = 29;
    mod ? null : (maxDay = 28);
    let compare = (date, indexDate, indexMonth) => parseInt(splitDate(date)[indexDate]) === 2 && parseInt(splitDate(date)[indexMonth]) <= maxDay;
    if (!!date.match(withDay)) {
        return mod ? compare(date, 1, 0) : compare(date, 1, 0);
    }
    else if (!!date.match(withMonth)) {
        return mod ? compare(date, 0, 1) : compare(date, 1, 0);
    }
    return mod;
};
const getYear = (date = '') => splitDate(date).pop();
const yearToInt = (year = '', date = '') => {
    let intYear = 1;
    try {
        let tmp = !!intYear ? intYear.toString() : '';
        intYear = parseInt(tmp);
    }
    catch (error) { }
    return februaryException(date, intYear % 4 === 0);
};
const dates = {
    leapYear: (date) => {
        return !!date.match(withDay) || !!date.match(withMonth) ? yearToInt(getYear(date), date) : false;
    },
};
exports.default = dates;
