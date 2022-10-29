import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(
			problemFunction(
				[
					[1, 3],
					[6, 9],
				],
				[2, 5]
			)
		).toEqual([
			[1, 5],
			[6, 9],
		]);
	});

	it('should work with test case 2', () => {
		expect(
			problemFunction(
				[
					[1, 2],
					[3, 5],
					[6, 7],
					[8, 10],
					[12, 16],
				],
				[4, 8]
			)
		).toEqual([
			[1, 2],
			[3, 10],
			[12, 16],
		]);
	});

	it('should work with test case 3', () => {
		expect(
			problemFunction(
				[
					[3, 5],
					[12, 15],
				],
				[6, 6]
			)
		).toEqual([
			[3, 5],
			[6, 6],
			[12, 15],
		]);
	});
});
