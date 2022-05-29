import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction(4, [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], 0, 3, 1)).toBe(700);
	});

	it('should work with test case 2', () => {
		expect(problemFunction(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1)).toBe(200);
	});

	it('should work with test case 3', () => {
		expect(problemFunction(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 0)).toBe(500);
	});

	it('should work with test case 4', () => {
		expect(problemFunction(4, [[0,1,1],[0,2,5],[1,2,1],[2,3,1]], 0, 3, 1)).toBe(6);
	});
});
