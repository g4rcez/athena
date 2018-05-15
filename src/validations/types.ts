export const types = {
	isType: (type: any, test: any) =>
		test.constructor === type && test !== undefined && ![null].includes(test),
	number: (n: number) => types.isType(Number, n),
	integer: (s: number) => types.isType(Number, s),
	float: (f: number) => types.isType(Number, f) && f % 1 !== 0,
	string: (s: string) => types.isType(String, s),
	array: (a: Array<any>) => types.isType(Array, a),
	positive: (n: number) => types.number(n) && n > 0,
	negative: (n: number) => types.number(n) && n < 0,
};