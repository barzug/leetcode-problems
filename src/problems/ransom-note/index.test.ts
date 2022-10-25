import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction('a', 'b')).toBe(false);
	});

	it('should work with test case 2', () => {
		expect(problemFunction('aa', 'ab')).toBe(false);
	});

	it('should work with test case 3', () => {
		expect(problemFunction('aa', 'aab')).toBe(true);
	});
});
