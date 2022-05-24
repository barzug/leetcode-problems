export class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;

	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = (val === undefined ? 0 : val);
		this.left = (left === undefined ? null : left);
		this.right = (right === undefined ? null : right);
	}
}

function addNodes<T>(position: number, array: Array<number>): TreeNode | null {
	if (typeof array[position] === 'undefined' || array[position] === null) {
		return null;
	}

	return new TreeNode(array[position], addNodes(2 * position + 1, array), addNodes(2 * position + 2, array));
}

export default function createBinaryTreeFromArray(array: Array<number>): TreeNode {
	return addNodes(0, array);
}
