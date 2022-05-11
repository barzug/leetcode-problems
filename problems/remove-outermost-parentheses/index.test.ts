import problemFunction from './index';

describe('baseball-game', () => {
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
