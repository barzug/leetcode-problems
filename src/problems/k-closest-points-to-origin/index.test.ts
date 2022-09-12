import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(
			problemFunction(
				[
					[1, 3],
					[-2, 2],
				],
				1
			)
		).toEqual([[-2, 2]]);
	});

	it('should work with test case 2', () => {
		expect(
			problemFunction(
				[
					[3, 3],
					[5, -1],
					[-2, 4],
				],
				2
			)
		).toEqual([
			[3, 3],
			[-2, 4],
		]);
	});

	it('should work with test case 3', () => {
		expect(
			problemFunction(
				[
					[5, -3],
					[3, -4],
					[-2, 9],
					[-8, -8],
					[-6, 5],
					[6, 1],
					[5, 9],
				],
				6
			)
		).toEqual([
			[3, -4],
			[5, -3],
			[-6, 5],
			[6, 1],
			[-2, 9],
			[5, 9],
		]);
	});
});
