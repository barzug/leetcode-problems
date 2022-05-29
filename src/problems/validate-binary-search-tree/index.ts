import { TreeNode } from '@/algorithms/createBinaryTreeFromArray';

function dfs(root: TreeNode, min: number, max: number): boolean {
	if (root.val <= min || root.val >= max) {
		return false;
	}

	if (root.left !== null && typeof root.left !== 'undefined') {
		const _max = Math.min(max, root.val);
		if (!dfs(root.left, min, _max)) {
			return false;
		}
	}

	if (root.right !== null && typeof root.right !== 'undefined') {
		const _min = Math.max(min, root.val);
		if (!dfs(root.right, _min, max)) {
			return false;
		}
	}

	return true;
}

export default function isValidBST(root: TreeNode | null): boolean {
	if (!root) {
		return true;
	}

	return dfs(root, -Infinity, Infinity);
}
