import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction('ab#c', 'ad#c')).toBe(true);
	});

	it('should work with test case 2', () => {
		expect(problemFunction('ab##', 'c#d#')).toBe(true);
	});

	it('should work with test case 3', () => {
		expect(problemFunction('a#c', 'b')).toBe(false);
	});
});
