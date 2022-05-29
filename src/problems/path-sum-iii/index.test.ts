import path from 'path';
import createBinaryTreeFromArray from '@/algorithms/createBinaryTreeFromArray';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction(createBinaryTreeFromArray([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]), 8)).toBe(3);
	});

	it('should work with test case 2', () => {
		expect(problemFunction(createBinaryTreeFromArray([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 22)).toBe(
			3
		);
	});
});
