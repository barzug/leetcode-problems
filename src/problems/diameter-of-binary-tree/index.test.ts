import path from 'path';
import createBinaryTreeFromArray from '@/algorithms/createBinaryTreeFromArray';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction(createBinaryTreeFromArray([1,2,3,4,5]))).toBe(3);
	});

	it('should work with test case 2', () => {
		expect(problemFunction(createBinaryTreeFromArray([1,2]))).toBe(1);
	});
});
