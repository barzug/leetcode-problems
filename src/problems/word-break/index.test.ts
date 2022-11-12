import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction('leetcode', ['leet', 'code'])).toBe(true);
	});

	it('should work with test case 2', () => {
		expect(problemFunction('applepenapple', ['apple', 'pen'])).toBe(true);
	});

	it('should work with test case 3', () => {
		expect(problemFunction('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])).toBe(false);
	});
});
