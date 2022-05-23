import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction([1,2,3,4,5,6,7,8,9,10], 5)).toBe(15);
	});

	it('should work with test case 2', () => {
		expect(problemFunction([3,2,2,4,1,4], 3)).toBe(6);
	});

	it('should work with test case 3', () => {
		expect(problemFunction([1,2,3,1,1], 4)).toBe(3);
	});
});
