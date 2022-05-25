import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction([3, 6, 7, 11], 8)).toBe(4);
	});

	it('should work with test case 2', () => {
		expect(problemFunction([30, 11, 23, 4, 20], 5)).toBe(30);
	});

	it('should work with test case 3', () => {
		expect(problemFunction([30, 11, 23, 4, 20], 6)).toBe(23);
	});
});
