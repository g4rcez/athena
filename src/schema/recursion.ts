export {};

const namedObject = (property: any, objName: string = '') => {
	Array.isArray(property) ? (property = property[0]) : null;
	let replace = (string) =>
		string
			.replace(/\[{1,}/g, '[')
			.replace(/\]{1,}/g, ']')
			.replace(/,{1,}/g, '');
	return objName == '' ? replace(property) : replace(`${objName}.${property}`);
};

const recursive = (object: object, path: any = '') => {
	return Object.keys(object).map((x) => {
		let compact: Array<object>;
		let temp: Array<string> = [];
		if (typeof object[x] == 'object' && !Array.isArray(object)) {
			compact = recursive(object[x]);
			compact.forEach((y) => temp.push(namedObject(y, x)));
		}
		temp.push(namedObject(x));
		return temp;
	});
};

module.exports = recursive;
