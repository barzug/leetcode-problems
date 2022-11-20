import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction('ADOBECODEBANC', 'ABC')).toBe('BANC');
	});

	it('should work with test case 2', () => {
		expect(problemFunction('a', 'a')).toBe('a');
	});

	it('should work with test case 3', () => {
		expect(problemFunction('a', 'aa')).toBe('');
	});

	it('should work with test case 4', () => {
		expect(problemFunction('aa', 'aa')).toBe('aa');
	});
});
