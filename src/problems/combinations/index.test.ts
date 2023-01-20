import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction(4, 2)).toEqual([
			[1, 2],
			[1, 3],
			[1, 4],
			[2, 3],
			[2, 4],
			[3, 4],
		]);
	});

	it('should work with test case 2', () => {
		expect(problemFunction(1, 1)).toEqual([[1]]);
	});
});
