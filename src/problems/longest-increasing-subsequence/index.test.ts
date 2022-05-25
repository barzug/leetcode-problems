import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
	});

	it('should work with test case 2', () => {
		expect(problemFunction([0, 1, 0, 3, 2, 3])).toBe(4);
	});

	it('should work with test case 3', () => {
		expect(problemFunction([7, 7, 7, 7, 7, 7, 7])).toBe(1);
	});
});
