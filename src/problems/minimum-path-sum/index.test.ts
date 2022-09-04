import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(
			problemFunction([
				[1, 3, 1],
				[1, 5, 1],
				[4, 2, 1],
			])
		).toBe(7);
	});

	it('should work with test case 2', () => {
		expect(
			problemFunction([
				[1, 2, 3],
				[4, 5, 6],
			])
		).toBe(12);
	});
});
