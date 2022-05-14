import path from 'path'

import findRedundantConnection from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(
			findRedundantConnection([
				[1, 2],
				[1, 3],
				[2, 3],
			])
		).toEqual([2, 3]);
	});

	it('should work with test case 2', () => {
		expect(
			findRedundantConnection([
				[1, 2],
				[2, 3],
				[3, 4],
				[1, 4],
				[1, 5],
			])
		).toEqual([1, 4]);
	});
});
