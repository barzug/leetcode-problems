import { TreeNode } from '@/algorithms/createBinaryTreeFromArray';

export default function kthSmallest(root: TreeNode | null, k: number): number {
	const stack: Array<TreeNode> = [];
	let i = k;

	while (root !== null) {
		stack.push(root);
		root = root.left;
	}

	while (k !== 0) {
		const node = stack.pop();

		i--;
		if (i === 0) {
			return node.val;
		}

		let right = node.right;
		while (right) {
			stack.push(right);
			right = right.left;
		}
	}

	return -1;
}
