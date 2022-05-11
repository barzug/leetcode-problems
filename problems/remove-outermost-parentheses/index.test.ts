import path from 'path'

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction('(()())(())')).toBe('()()()');
	});

	it('should work with test case 2', () => {
		expect(problemFunction('(()())(())(()(()))')).toBe('()()()()(())');
	});

	it('should work with test case 3', () => {
		expect(problemFunction('()()')).toBe('');
	});
});
