import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction([1,2,5], 11)).toBe(3);
	});

	it('should work with test case 2', () => {
		expect(problemFunction([2], 3)).toBe(-1);
	});

	it('should work with test case 3', () => {
		expect(problemFunction([1], 0)).toBe(0);
	});
});
