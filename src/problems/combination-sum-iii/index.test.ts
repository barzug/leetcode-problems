import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction(3, 7)).toEqual([[1, 2, 4]]);
	});

	it('should work with test case 2', () => {
		expect(problemFunction(3, 9)).toEqual([
			[1, 2, 6],
			[1, 3, 5],
			[2, 3, 4],
		]);
	});

	it('should work with test case 3', () => {
		expect(problemFunction(4, 1)).toEqual([]);
	});
});
