import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction([7, 1, 5, 3, 6, 4])).toBe(7);
	});

	it('should work with test case 2', () => {
		expect(problemFunction([1, 2, 3, 4, 5])).toBe(4);
	});

	it('should work with test case 3', () => {
		expect(problemFunction([7, 6, 4, 3, 1])).toBe(0);
	});
});
