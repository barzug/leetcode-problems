import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction(2, [[1, 0]])).toEqual([0, 1]);
	});

	it('should work with test case 2', () => {
		expect(
			problemFunction(4, [
				[1, 0],
				[2, 0],
				[3, 1],
				[3, 2],
			])
		).toEqual([0, 2, 1, 3]);
	});

	it('should work with test case 3', () => {
		expect(problemFunction(1, [])).toEqual([0]);
	});
});
