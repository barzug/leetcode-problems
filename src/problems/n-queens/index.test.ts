import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction(4)).toEqual([[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]);
	});

	it('should work with test case 2', () => {
		expect(problemFunction(1)).toEqual([["Q"]]);
	});
});
