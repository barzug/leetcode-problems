import { TreeNode } from '@/algorithms/createBinaryTreeFromArray';

export default function pathSum(root: TreeNode | null, targetSum: number): number {
	let result = 0;

	function dfs(root: TreeNode | null, stack: Array<number>) {
		if (root === null) {
			return;
		}

		stack.push(root.val);

		let sum = 0;
		for (let i = stack.length - 1; i >= 0; i--) {
			sum += stack[i];
			if (sum === targetSum) {
				result++;
			}
		}

		dfs(root.left, stack);
		dfs(root.right, stack);

		stack.pop();
	}

	const stack: Array<number> = [];

	dfs(root, stack);

	return result;
}
