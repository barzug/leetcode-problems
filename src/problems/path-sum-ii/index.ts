import { TreeNode } from '@/algorithms/createBinaryTreeFromArray';

export default function pathSum(root: TreeNode | null, targetSum: number): number[][] {
	if (!root) {
		return [];
	}

	const stack: number[] = [];
	const result: number[][] = [];
	let sum = 0;

	function searchSum(node: TreeNode) {
		stack.push(node.val);
		sum += node.val;

		if (node.left === null && node.right === null && sum === targetSum) {
			result.push(stack.slice());
		} else {
			if (node.left !== null) {
				searchSum(node.left);
			}

			if (node.right !== null) {
				searchSum(node.right);
			}
		}

		stack.pop();
		sum -= node.val;
	}

	searchSum(root);

	return result;
}
