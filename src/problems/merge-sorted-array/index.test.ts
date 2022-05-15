import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		const array1 = [1,2,3,0,0,0]
		problemFunction(array1, 3, [2,5,6], 3)
		expect(array1).toEqual([1,2,2,3,5,6]);
	});

	it('should work with test case 2', () => {
		const array1 = [1]
		problemFunction(array1, 1, [], 0)
		expect(array1).toEqual([1]);
	});

	it('should work with test case 3', () => {
		const array1 = [0]
		problemFunction(array1, 0, [1], 1)
		expect(array1).toEqual([1]);
	});
});
