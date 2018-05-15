const brazilianRegex: object = require('./brazilian');
const commonRegex: object = require('./common');

let regex = {};
[brazilianRegex, commonRegex].forEach((group) =>
	Object.keys(group).forEach((x) => (regex[x] = group[x])),
);

export default regex;

