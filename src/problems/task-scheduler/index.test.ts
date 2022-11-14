import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction(["A","A","A","B","B","B"], 2)).toEqual(8);
	});

	it('should work with test case 2', () => {
		expect(problemFunction(["A","A","A","B","B","B"], 0)).toEqual(6);
	});

	it('should work with test case 3', () => {
		expect(problemFunction(["A","A","A","A","A","A","B","C","D","E","F","G"], 2)).toEqual(16);
	});
});
