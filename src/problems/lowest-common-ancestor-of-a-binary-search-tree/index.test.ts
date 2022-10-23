import path from 'path';
import createBinaryTreeFromArray from '@/algorithms/createBinaryTreeFromArray';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		const tree = createBinaryTreeFromArray([6,2,8,0,4,7,9,null,null,3,5]);
		const p = tree.left;
		const q = tree.right;
		const commonAncestor = tree;

		expect(problemFunction(tree, p, q)).toBe(commonAncestor);
	});

	it('should work with test case 2', () => {
		const tree = createBinaryTreeFromArray([6,2,8,0,4,7,9,null,null,3,5]);
		const p = tree.left;
		const q = tree.left.right;
		const commonAncestor = p;

		expect(problemFunction(tree, p, q)).toBe(commonAncestor);
	});

	it('should work with test case 3', () => {
		const tree = createBinaryTreeFromArray([2,1]);
		const p = tree;
		const q = tree.left;
		const commonAncestor = p;

		expect(problemFunction(tree, p, q)).toBe(commonAncestor);
	});
});
