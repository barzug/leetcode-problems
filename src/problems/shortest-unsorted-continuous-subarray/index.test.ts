import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction([2, 6, 4, 8, 10, 9, 15])).toEqual(5);
	});

	it('should work with test case 2', () => {
		expect(problemFunction([1, 2, 3, 4])).toEqual(0);
	});

	it('should work with test case 3', () => {
		expect(problemFunction([1])).toEqual(0);
	});

	it('should work with test case 4', () => {
		expect(problemFunction([2,1])).toEqual(2);
	});
});
