import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
	});

	it('should work with test case 2', () => {
		expect(problemFunction([1])).toBe(1);
	});

	it('should work with test case 3', () => {
		expect(problemFunction([5,4,-1,7,8])).toBe(23);
	});

	it('should work with test case 3', () => {
		expect(problemFunction([-2,1])).toBe(1);
	});
});
