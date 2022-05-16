import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction([3,2,1,5,6,4], 2)).toBe(5);
	});

	it('should work with test case 2', () => {
		expect(problemFunction([3,2,3,1,2,4,5,5,6], 4)).toBe(
			4
		);
	});
});
