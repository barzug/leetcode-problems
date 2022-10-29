import { TreeNode } from '@/algorithms/createBinaryTreeFromArray';

export default function diameterOfBinaryTree(root: TreeNode | null): number {
	let maxDiameter = 0;

	function dfs(node: TreeNode): number {
		if (node === null) {
			return 0;
		}

		const leftHeight = dfs(node.left);
		const rightHeight = dfs(node.right);

		maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

		return Math.max(leftHeight, rightHeight) + 1;
	}

	dfs(root);

	return maxDiameter;
};
