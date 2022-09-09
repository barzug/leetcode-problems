import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction([6, 5, 4, 3, 2, 1], 2)).toBe(7);
	});

	it('should work with test case 2', () => {
		expect(problemFunction([9, 9, 9], 4)).toBe(-1);
	});

	it('should work with test case 3', () => {
		expect(problemFunction([1, 1, 1], 3)).toBe(3);
	});

	it('should work with test case 4', () => {
		expect(problemFunction([11, 111, 22, 222, 33, 333, 44, 444], 6)).toBe(843);
	});
});
