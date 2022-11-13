import { TreeNode } from '@/algorithms/createBinaryTreeFromArray';

export default function rightSideView(root: TreeNode | null): number[] {
	if (!root) {
		return [];
	}

	const result = [];

	let currentRow = [root];
	while (currentRow.length) {
		const lastElement = currentRow[currentRow.length - 1]
		result.push(lastElement.val);

		const nextRow = [];
		currentRow.forEach((node) => {
			node.left && nextRow.push(node.left);
			node.right && nextRow.push(node.right);
		})

		currentRow = nextRow;
	}

	return result;
}
