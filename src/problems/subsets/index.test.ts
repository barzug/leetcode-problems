import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction([1, 2, 3])).toEqual([[], [1], [1, 2], [2], [2, 3], [1, 2, 3], [1, 3], [3]]);
	});

	it('should work with test case 2', () => {
		expect(problemFunction([0])).toEqual([[], [0]]);
	});
});
