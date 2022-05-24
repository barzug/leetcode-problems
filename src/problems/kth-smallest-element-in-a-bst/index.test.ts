import path from 'path';
import createBinaryTreeFromArray from '@/algorithms/createBinaryTreeFromArray'

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {

		expect(problemFunction(createBinaryTreeFromArray([3, 1, 4, null, 2]), 1)).toBe(1);
	});

	it('should work with test case 2', () => {
		expect(problemFunction(createBinaryTreeFromArray([5, 3, 6, 2, 4, null, null, 1]), 3)).toBe(3);
	});
});
