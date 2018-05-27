import dates from './dates';
import common from './common';
import numbers from './numbers';
import hashCode from './hashCode';
import brazilian from './brazilian';

let regex = {};
[brazilian, common, dates, hashCode, numbers].forEach(group =>
	Object.keys(group).forEach(x => (regex[x] = group[x])),
);
export default regex;
