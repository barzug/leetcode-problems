import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction([1, 3], [2])).toEqual(2);
	});

	it('should work with test case 2', () => {
		expect(problemFunction([1, 2], [3, 4])).toEqual(2.5);
	});

	it('should work with test case 3', () => {
		expect(problemFunction([1, 2, 8], [3, 4])).toEqual(3);
	});

	it('should work with test case 4', () => {
		expect(problemFunction([], [2, 3])).toEqual(2.5);
	});

	it('should work with test case 5', () => {
		expect(problemFunction([0, 0], [0, 0])).toEqual(0);
	});

	it('should work with test case 6', () => {
		expect(problemFunction([], [1, 2, 3, 4])).toEqual(2.5);
	});
});
