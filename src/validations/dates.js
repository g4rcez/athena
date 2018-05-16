"use strict";
exports.__esModule = true;
var common_1 = require("./regex/common");
var withDay = common_1["default"].dayMonthYearWithMonthValidation;
var withMonth = common_1["default"].monthDayYearWithMonthValidation;
var monthInt = 0;
var splitDate = function (date) { return date.split(new RegExp('(/|-| )')); };
var februaryException = function (date, mod) {
    var monthCondition = false;
    var maxDay = 29;
    mod ? null : (maxDay = 28);
    var compare = function (date, indexDate, indexMonth) {
        return parseInt(splitDate(date)[indexDate]) === 2 && parseInt(splitDate(date)[indexMonth]) <= maxDay;
    };
    if (!!date.match(withDay)) {
        return mod ? compare(date, 1, 0) : compare(date, 1, 0);
    }
    else if (!!date.match(withMonth)) {
        return mod ? compare(date, 0, 1) : compare(date, 1, 0);
    }
    return mod;
};
var getYear = function (date) {
    if (date === void 0) { date = ''; }
    return splitDate(date).pop();
};
var yearToInt = function (year, date) {
    if (year === void 0) { year = ''; }
    if (date === void 0) { date = ''; }
    var intYear = 1;
    try {
        var tmp = !!intYear ? intYear.toString() : '';
        intYear = parseInt(tmp);
    }
    catch (error) { }
    return februaryException(date, intYear % 4 === 0);
};
var dates = {
    leapYear: function (date) {
        return !!date.match(withDay) || !!date.match(withMonth) ? yearToInt(getYear(date), date) : false;
    }
};
exports["default"] = dates;
