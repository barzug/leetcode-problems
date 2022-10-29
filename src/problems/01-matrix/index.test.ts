import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(
			problemFunction([
				[0, 0, 0],
				[0, 1, 0],
				[0, 0, 0],
			])
		).toEqual([
			[0, 0, 0],
			[0, 1, 0],
			[0, 0, 0],
		]);
	});

	it('should work with test case 2', () => {
		expect(
			problemFunction([
				[0, 0, 0],
				[0, 1, 0],
				[1, 1, 1],
			])
		).toEqual([
			[0, 0, 0],
			[0, 1, 0],
			[1, 2, 1],
		]);
	});

	it('should work with test case 3', () => {
		expect(
			problemFunction([
				[0, 1, 0, 1, 1],
				[1, 1, 0, 0, 1],
				[0, 0, 0, 1, 0],
				[1, 0, 1, 1, 1],
				[1, 0, 0, 0, 1],
			])
		).toEqual([
			[0, 1, 0, 1, 2],
			[1, 1, 0, 0, 1],
			[0, 0, 0, 1, 0],
			[1, 0, 1, 1, 1],
			[1, 0, 0, 0, 1],
		]);
	});
});
