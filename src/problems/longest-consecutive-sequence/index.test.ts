import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction([100, 4, 200, 1, 3, 2])).toBe(4);
	});

	it('should work with test case 2', () => {
		expect(problemFunction([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
	});
});
