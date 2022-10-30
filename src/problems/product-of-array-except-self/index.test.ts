import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
	});

	it('should work with test case 2', () => {
		expect(problemFunction([-1, 1, 0, -3, 3]).toString()).toEqual([0, 0, 9, 0, 0].toString());
	});

	it('should work with test case 3', () => {
		expect(problemFunction([0, 1, 0, -3, 3]).toString()).toEqual([0, 0, 0, 0, 0].toString());
	});

	it('should work with test case 4', () => {
		expect(problemFunction([1, 1, 1, 1])).toEqual([1, 1, 1, 1]);
	});
});
