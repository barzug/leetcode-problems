import createBinaryTreeFromArray from './index';

describe('createBinaryTreeFromArray', () => {
	it(`create arrays correctly`, () => {
		const binaryTree = createBinaryTreeFromArray([5,3,6,2,4,null,null,1])

		expect(binaryTree.val).toEqual(5);
		expect(binaryTree.left?.val).toEqual(3);
		expect(binaryTree.right?.val).toEqual(6);
		expect(binaryTree.left?.left?.val).toEqual(2);
		expect(binaryTree.left?.right?.val).toEqual(4);
		expect(binaryTree.right?.right).toEqual(null);
		expect(binaryTree.left?.left?.left?.val).toEqual(1);
	});

	it(`work with null elements in leetcode ways`, () => {
		const binaryTree = createBinaryTreeFromArray([5,4,8,11,null,13,4,7,2,null,null,5,1])

		expect(binaryTree.val).toEqual(5);
		expect(binaryTree.right?.val).toEqual(8);
		expect(binaryTree.right?.left?.val).toEqual(13);
		expect(binaryTree.right?.right?.val).toEqual(4);
		expect(binaryTree.right?.right?.right?.val).toEqual(1);
		expect(binaryTree.right?.right?.left?.val).toEqual(5);
	});

	it(`work with 0 elements`, () => {
		const binaryTree = createBinaryTreeFromArray([5,4,0,11,null,13,4,7,2,null,null,5,1])

		expect(binaryTree.val).toEqual(5);
		expect(binaryTree.right?.val).toEqual(0);
		expect(binaryTree.right?.left?.val).toEqual(13);
		expect(binaryTree.right?.right?.val).toEqual(4);
		expect(binaryTree.right?.right?.right?.val).toEqual(1);
		expect(binaryTree.right?.right?.left?.val).toEqual(5);
	});
});
