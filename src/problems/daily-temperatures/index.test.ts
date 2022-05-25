import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction([73, 74, 75, 71, 69, 72, 76, 73])).toStrictEqual([1, 1, 4, 2, 1, 1, 0, 0]);
	});

	it('should work with test case 2', () => {
		expect(problemFunction([30, 40, 50, 60])).toStrictEqual([1, 1, 1, 0]);
	});

	it('should work with test case 3', () => {
		expect(problemFunction([30, 60, 90])).toStrictEqual([1, 1, 0]);
	});
});
