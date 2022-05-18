import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction([[1, 2], [2, 3], [3, 4], [1, 3]])).toBe(1);
	});

	it('should work with test case 2', () => {
		expect(problemFunction([[1, 2], [1, 2], [1, 2]])).toBe(
			2,
		);
	});

	it('should work with test case 3', () => {
		expect(problemFunction([[1, 2], [2, 3]])).toBe(0);
	});

	it('should work with test case 4', () => {
		expect(problemFunction([[-52,31],[-73,-26],[82,97],[-65,-11],[-62,-49],[95,99],[58,95],[-31,49],[66,98],[-63,2],[30,47],[-40,-26]])).toBe(7);
	});
});
