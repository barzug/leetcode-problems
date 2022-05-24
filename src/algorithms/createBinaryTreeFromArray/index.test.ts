import createBinaryTreeFromArray from './index';

describe('createBinaryTreeFromArray', () => {
	it(`create arrays correctly`, () => {
		const binaryTree = createBinaryTreeFromArray([5,3,6,2,4,null,null,1])

		expect(binaryTree.val).toEqual(5);
		expect(binaryTree.left.val).toEqual(3);
		expect(binaryTree.right.val).toEqual(6);
		expect(binaryTree.left.left.val).toEqual(2);
		expect(binaryTree.left.right.val).toEqual(4);
		expect(binaryTree.right.right).toEqual(null);
		expect(binaryTree.left.left.left.val).toEqual(1);
	});
});
