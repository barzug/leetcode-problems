import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction([3, 2, 3])).toBe(3);
	});

	it('should work with test case 2', () => {
		expect(problemFunction([2, 2, 1, 1, 1, 2, 2])).toBe(2);
	});
});
