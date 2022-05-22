import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction(5, [1,2,5])).toBe(4);
	});

	it('should work with test case 2', () => {
		expect(problemFunction(3, [2])).toBe(0);
	});

	it('should work with test case 3', () => {
		expect(problemFunction(10, [10])).toBe(1);
	});
});
