export {};

const objectRecursion = (target: any, fnObj: Function, node = {}) => {
	Object.entries(target).forEach((x) => {
		if (typeof x[1] === 'object') {
			node[x[0]] = objectRecursion(x[1], fnObj, node);
		}
		console.log('---------', node[x[0]]);
	});
	return node;
};

module.exports = objectRecursion;
