import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction('cbaebabacd', 'abc')).toEqual([0, 6]);
	});

	it('should work with test case 2', () => {
		expect(problemFunction('abab', 'ab')).toEqual([0, 1, 2]);
	});
});
