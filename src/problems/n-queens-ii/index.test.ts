import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction(4)).toBe(2);
	});

	it('should work with test case 2', () => {
		expect(problemFunction(1)).toBe(1);
	});
});
