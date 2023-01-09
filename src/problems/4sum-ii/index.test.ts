import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction([1, 2], [-2, -1], [-1, 2], [0, 2])).toEqual(2);
	});

	it('should work with test case 2', () => {
		expect(problemFunction([0], [0], [0], [0])).toEqual(1);
	});
});
