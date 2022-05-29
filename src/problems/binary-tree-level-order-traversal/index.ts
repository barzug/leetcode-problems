import { TreeNode } from '@/algorithms/createBinaryTreeFromArray';

export default function levelOrder(root: TreeNode | null): number[][] {
	if (!root) {
		return [];
	}

	const result = [];
	let row = 0;

	const queue = [root];
	let i = 0;
	while (i < queue.length) {
		const nexRowElement = queue.length;

		result[row] = [];
		for (; i < nexRowElement; i++) {
			if (queue[i]) {
				result[row].push(queue[i].val);

				queue[i].left && queue.push(queue[i].left);
				queue[i].right && queue.push(queue[i].right);
			}
		}

		row++;
	}

	return result;
}
