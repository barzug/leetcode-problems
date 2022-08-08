import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(
			problemFunction(
				[
					['A', 'B', 'C', 'E'],
					['S', 'F', 'C', 'S'],
					['A', 'D', 'E', 'E'],
				],
				'ABCCED'
			)
		).toBe(true);
	});

	it('should work with test case 2', () => {
		expect(
			problemFunction(
				[
					['A', 'B', 'C', 'E'],
					['S', 'F', 'C', 'S'],
					['A', 'D', 'E', 'E'],
				],
				'SEE'
			)
		).toBe(true);
	});

	it('should work with test case 3', () => {
		expect(
			problemFunction(
				[
					['A', 'B', 'C', 'E'],
					['S', 'F', 'C', 'S'],
					['A', 'D', 'E', 'E'],
				],
				'ABCB'
			)
		).toBe(false);
	});
});
