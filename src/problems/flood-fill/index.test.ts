import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2)).toEqual([[2,2,2],[2,2,0],[2,0,1]]);
	});

	it('should work with test case 2', () => {
		expect(problemFunction([[0,0,0],[0,0,0]], 0, 0, 0)).toEqual([[0,0,0],[0,0,0]]);
	});
});
