import { TreeNode } from '@/algorithms/createBinaryTreeFromArray';

export default function isBalanced(root: TreeNode | null): boolean {
	function dfsHeight(node: TreeNode | null, height): number {
		if (node === null) {
			return height;
		}

		const leftHeight = dfsHeight(node.left, height + 1);
		if (leftHeight === -1) {
			return -1;
		}

		const rightHeight = dfsHeight(node.right, height + 1);
		if (rightHeight === -1) {
			return -1;
		}

		if (Math.abs(leftHeight - rightHeight) > 1) {
			return -1;
		}

		return Math.max(leftHeight, rightHeight);
	}

	return dfsHeight(root, 0) !== -1;
}
