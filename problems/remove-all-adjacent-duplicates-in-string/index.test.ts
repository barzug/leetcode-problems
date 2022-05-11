import problemFunction from './index';

describe('baseball-game', () => {
	it('should work with test case 1', () => {
		expect(problemFunction('abbaca')).toBe('ca');
	});

	it('should work with test case 2', () => {
		expect(problemFunction('azxxzy')).toBe('ay');
	});
});
