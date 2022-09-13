import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
	});

	it('should work with test case 2', () => {
		expect(problemFunction([4, 2, 0, 3, 2, 5])).toBe(9);
	});
});
