import path from 'path';
import createBinaryTreeFromArray from '@/algorithms/createBinaryTreeFromArray';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction(createBinaryTreeFromArray([3,9,20,null,null,15,7]))).toBe(true);
	});

	it('should work with test case 2', () => {
		expect(problemFunction(createBinaryTreeFromArray([1,2,2,3,3,null,null,4,4]))).toBe(false);
	});

	it('should work with test case 3', () => {
		expect(problemFunction(createBinaryTreeFromArray([]))).toBe(true);
	});

	it('should work with test case 4', () => {
		expect(problemFunction(createBinaryTreeFromArray([1,2,3,4,5,6,null,8]))).toBe(true);
	});
});
