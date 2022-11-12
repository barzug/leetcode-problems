import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction([1, 5, 11, 5])).toBe(true);
	});

	it('should work with test case 2', () => {
		expect(problemFunction([1, 2, 3, 5])).toBe(false);
	});

	it('should work with test case 3', () => {
		expect(problemFunction([3, 3, 3, 4, 5])).toBe(true);
	});
});
