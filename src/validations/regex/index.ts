import commonRegex from './common';
import brazilianRegex from './brazilian';

let regex = {};
[brazilianRegex, commonRegex].forEach((group) =>
	Object.keys(group).forEach((x) => (regex[x] = group[x])),
);
export default regex;
