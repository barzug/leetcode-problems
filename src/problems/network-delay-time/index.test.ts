import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(
			problemFunction(
				[
					[2, 1, 1],
					[2, 3, 1],
					[3, 4, 1],
				],
				4,
				2
			)
		).toBe(2);
	});

	it('should work with test case 2', () => {
		expect(problemFunction([[1, 2, 1]], 2, 1)).toBe(1);
	});

	it('should work with test case 3', () => {
		expect(problemFunction([[1, 2, 1]], 2, 2)).toBe(-1);
	});

	it('should work with test case 3', () => {
		expect(
			problemFunction(
				[
					[1, 2, 1],
					[2, 3, 2],
					[1, 3, 2],
				],
				3,
				1
			)
		).toBe(2);
	});
});
