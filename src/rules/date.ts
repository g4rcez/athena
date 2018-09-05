import moment from "moment";

export default {
  isDate: (value: string) => moment(value).isValid(),
  isAfterDate: (value: string, after: string) => moment(value).isAfter(after),
  isBeforeDate: (value: string, date: string) => moment(value).isBefore(date)
};
