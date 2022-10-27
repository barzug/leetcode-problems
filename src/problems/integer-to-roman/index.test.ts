import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction(3)).toBe('III');
	});

	it('should work with test case 2', () => {
		expect(problemFunction(58)).toBe('LVIII');
	});

	it('should work with test case 3', () => {
		expect(problemFunction(1994)).toBe('MCMXCIV');
	});
});
