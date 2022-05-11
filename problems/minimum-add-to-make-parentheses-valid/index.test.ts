import problemFunction from './index';

describe('baseball-game', () => {
	it('should work with test case 1', () => {
		expect(problemFunction('())')).toBe(1);
	});

	it('should work with test case 2', () => {
		expect(problemFunction('(((')).toBe(3);
	});
});
