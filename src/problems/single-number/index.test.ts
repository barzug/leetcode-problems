import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction([2, 2, 1])).toEqual(1);
	});

	it('should work with test case 2', () => {
		expect(problemFunction([4, 1, 2, 1, 2])).toEqual(4);
	});

	it('should work with test case 3', () => {
		expect(problemFunction([1])).toEqual(1);
	});
});
