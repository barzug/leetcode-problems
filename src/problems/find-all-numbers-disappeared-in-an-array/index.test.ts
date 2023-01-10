import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction([4,3,2,7,8,2,3,1])).toEqual([5,6]);
	});

	it('should work with test case 2', () => {
		expect(problemFunction([1,1])).toEqual([2]);
	});
});
