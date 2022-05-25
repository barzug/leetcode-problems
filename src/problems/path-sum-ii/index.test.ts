import path from 'path';
import createBinaryTreeFromArray from '@/algorithms/createBinaryTreeFromArray'

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction(createBinaryTreeFromArray([5,4,8,11,null,13,4,7,2,null,null,5,1]), 22)).toEqual([[5,4,11,2],[5,8,4,5]]);
	});

	it('should work with test case 2', () => {
		expect(problemFunction(createBinaryTreeFromArray([1,2,3]), 5)).toEqual([]);
	});

	it('should work with test case 3', () => {
		expect(problemFunction(createBinaryTreeFromArray([1,2]), 0)).toEqual([]);
	});
	it('should work with test case 4', () => {
		expect(problemFunction(createBinaryTreeFromArray([1]), 1)).toEqual([[1]]);
	});
	it('should work with test case 5', () => {
		expect(problemFunction(createBinaryTreeFromArray([1, 2, 2]), 3)).toEqual([[1, 2], [1, 2]]);
	});
});
