import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction(12, 15, 2)).toBe(13);
	});

	it('should work with test case 2', () => {
		expect(problemFunction(7, 11, 4)).toBe(7);
	});

	it('should work with test case 2', () => {
		expect(problemFunction(10, 20, 5)).toBe(13);
	});
});
