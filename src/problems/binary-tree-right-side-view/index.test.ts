import path from 'path';
import createBinaryTreeFromArray from '@/algorithms/createBinaryTreeFromArray';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction(createBinaryTreeFromArray([1, 2, 3, null, 5, null, 4]))).toEqual([1, 3, 4]);
	});

	it('should work with test case 2', () => {
		expect(problemFunction(createBinaryTreeFromArray([1, null, 3]))).toEqual([1, 3]);
	});

	it('should work with test case 3', () => {
		expect(problemFunction(createBinaryTreeFromArray([]))).toEqual([]);
	});


	//      1
	//    /   \
	//   2     3
	//  /
	// 4

	it('should work with test case 4', () => {
		expect(problemFunction(createBinaryTreeFromArray([1, 2, 3, 4]))).toEqual([1, 3, 4]);
	});
});
