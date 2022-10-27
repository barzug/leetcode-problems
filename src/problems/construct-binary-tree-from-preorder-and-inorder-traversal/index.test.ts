import path from 'path';
import createBinaryTreeFromArray from '@/algorithms/createBinaryTreeFromArray';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])).toEqual(
			createBinaryTreeFromArray([3, 9, 20, null, null, 15, 7])
		);
	});

	it('should work with test case 2', () => {
		expect(problemFunction([-1], [-1])).toEqual(createBinaryTreeFromArray([-1]));
	});

	it('should work with test case 3', () => {
		expect(problemFunction([1, 2], [2, 1])).toEqual(createBinaryTreeFromArray([1, 2]));
	});

	it('should work with test case 4', () => {
		expect(problemFunction([1, 2, 3], [1, 2, 3])).toEqual(createBinaryTreeFromArray([1, null, 2, null, 3]));
	});

	it('should work with test case 5', () => {
		expect(problemFunction([7, -10, -4, 3, -1, 2, -8, 11], [-4, -10, 3, -1, 7, 11, -8, 2])).toEqual(
			createBinaryTreeFromArray([7, -10, 2, -4, 3, -8, null, null, null, null, -1, 11])
		);
	});
});
