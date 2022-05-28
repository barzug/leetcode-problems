export class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;

	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

export default function createBinaryTreeFromArray(array: Array<number>): TreeNode {
	if (array.length === 0) {
		return null;
	}

	const queue: Array<TreeNode> = [];
	const root = new TreeNode(array[0]);

	queue.push(root);
	let firstQueuePos = 0;
	let position = 1;
	while (queue.length !== firstQueuePos) {
		const localRoot = queue[firstQueuePos++];

		if (typeof array[position] !== 'undefined' && array[position] !== null) {
			localRoot.left = new TreeNode(array[position]);
			queue.push(localRoot.left);
		}
		position++;

		if (typeof array[position] !== 'undefined' && array[position] !== null) {
			localRoot.right = new TreeNode(array[position]);
			queue.push(localRoot.right);
		}
		position++;
	}

	return root;
}
