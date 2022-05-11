import path from 'path'

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction('lee(t(c)o)de)')).toBe('lee(t(c)o)de');
	});

	it('should work with test case 2', () => {
		expect(problemFunction('a)b(c)d')).toBe('ab(c)d');
	});

	it('should work with test case 3', () => {
		expect(problemFunction('))((')).toBe('');
	});

	it('should work with test case 4', () => {
		expect(problemFunction('(b(aa')).toBe('baa');
	});
});
