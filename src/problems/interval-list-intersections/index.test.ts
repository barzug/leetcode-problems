import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(
			problemFunction(
				[
					[0, 2],
					[5, 10],
					[13, 23],
					[24, 25],
				],
				[
					[1, 5],
					[8, 12],
					[15, 24],
					[25, 26],
				]
			)
		).toEqual([
			[1, 2],
			[5, 5],
			[8, 10],
			[15, 23],
			[24, 24],
			[25, 25],
		]);
	});

	it('should work with test case 2', () => {
		expect(
			problemFunction(
				[
					[1, 3],
					[5, 9],
				],
				[]
			)
		).toEqual([]);
	});
});
