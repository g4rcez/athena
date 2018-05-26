import { types as type } from '../validations/types';

export const flat = arr => [].concat(...arr.map(v => (Array.isArray(v) ? flat(v) : v)));

export const recursive = (object: object, path: Array<string> = []) => {
	let map = Object.keys(object).map(item => {
		let content: any = item;
		if (typeof object[item] == 'object' && !type.array(object[item])) {
			content = recursive(object[item]);
			if (Array.isArray(content)) {
				content = content.map(x => item + '.' + x);
			}
		}
		return content;
	});
	return flat(map);
};
