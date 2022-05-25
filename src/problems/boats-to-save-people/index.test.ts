import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction([1, 2], 3)).toBe(1);
	});

	it('should work with test case 2', () => {
		expect(problemFunction([3, 2, 2, 1], 3)).toBe(3);
	});

	it('should work with test case 3', () => {
		expect(problemFunction([3, 5, 3, 4], 5)).toBe(4);
	});
});
