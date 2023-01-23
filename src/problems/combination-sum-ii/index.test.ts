import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction([10, 1, 2, 7, 6, 1, 5], 8)).toEqual([
			[1, 2, 5],
			[1, 1, 6],
			[2, 6],
			[1, 7],
		]);
	});

	it('should work with test case 2', () => {
		expect(problemFunction([2,5,2,1,2], 5)).toEqual([
			[1,2,2],
			[5]
		]);
	});

	it('should work with test case 3', () => {
		expect(problemFunction([2], 1)).toEqual([]);
	});
});
