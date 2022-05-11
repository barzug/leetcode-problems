import problemFunction from './index';

describe('remove-all-adjacent-duplicates-in-string', () => {
	it('should work with test case 1', () => {
		expect(problemFunction('abbaca')).toBe('ca');
	});

	it('should work with test case 2', () => {
		expect(problemFunction('azxxzy')).toBe('ay');
	});
});
