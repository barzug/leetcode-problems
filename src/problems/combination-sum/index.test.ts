import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]]);
	});

	it('should work with test case 2', () => {
		expect(problemFunction([2, 3, 5], 8)).toEqual([
			[2, 2, 2, 2],
			[2, 3, 3],
			[3, 5],
		]);
	});

	it('should work with test case 3', () => {
		expect(problemFunction([2], 1)).toEqual([]);
	});
});
