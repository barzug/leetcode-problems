import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction([1,2,3])).toEqual([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]);
	});

	it('should work with test case 2', () => {
		expect(problemFunction([0,1])).toEqual([[0,1],[1,0]]);
	});

	it('should work with test case 3', () => {
		expect(problemFunction([1])).toEqual([[1]]);
	});
});
