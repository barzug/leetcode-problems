import path from 'path';
import createBinaryTreeFromArray from '@/algorithms/createBinaryTreeFromArray';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction(createBinaryTreeFromArray([3, 9, 20, null, null, 15, 7]))).toEqual([
			[3],
			[9, 20],
			[15, 7],
		]);
	});

	it('should work with test case 2', () => {
		expect(problemFunction(createBinaryTreeFromArray([1]))).toEqual([[1]]);
	});

	it('should work with test case 3', () => {
		expect(problemFunction(createBinaryTreeFromArray([]))).toEqual([]);
	});
});
