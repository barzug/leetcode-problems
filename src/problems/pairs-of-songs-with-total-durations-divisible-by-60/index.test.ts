import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction([30, 20, 150, 100, 40])).toBe(3);
	});

	it('should work with test case 2', () => {
		expect(problemFunction([60,60,60])).toBe(3);
	});
});
