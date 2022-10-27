import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction([2, 7, 11, 15], 9)).toEqual([0, 1]);
	});

	it('should work with test case 2', () => {
		expect(problemFunction([3, 2, 4], 6)).toEqual([1, 2]);
	});

	it('should work with test case 3', () => {
		expect(problemFunction([3, 3], 6)).toEqual([0, 1]);
	});
});
