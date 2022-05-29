import path from 'path';
import createBinaryTreeFromArray from '@/algorithms/createBinaryTreeFromArray';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction(createBinaryTreeFromArray([2, 1, 3]))).toBe(true);
	});

	it('should work with test case 2', () => {
		expect(problemFunction(createBinaryTreeFromArray([5, 1, 4, null, null, 3, 6]))).toBe(false);
	});

	it('should work with test case 3', () => {
		expect(problemFunction(createBinaryTreeFromArray([5, 4, 6, null, null, 3, 7]))).toBe(false);
	});
});
