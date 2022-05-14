import path from 'path';

import regionsBySlashes from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(regionsBySlashes([' /', '/ '])).toBe(2);
	});

	it('should work with test case 2', () => {
		expect(regionsBySlashes([' /', '  '])).toBe(1);
	});

	it('should work with test case 3', () => {
		expect(regionsBySlashes(['/\\', '\\/'])).toBe(5);
	});
});
