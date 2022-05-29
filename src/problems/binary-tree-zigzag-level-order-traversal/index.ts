import {TreeNode} from '@/algorithms/createBinaryTreeFromArray';

export default function zigzagLevelOrder(root: TreeNode | null): number[][] {
	if (!root) {
		return [];
	}

	const result = [];
	let row = 0;

	const queue = [root];
	let i = 0;
	while (i < queue.length) {
		const nexRowElement = queue.length;

		const reverseOrder = !!(row % 2);

		const newRow = queue.slice(i, nexRowElement).map((node) => node.val);
		result.push(reverseOrder ? newRow.reverse() : newRow);

		for (; i < nexRowElement; i++) {
			queue[i].left && queue.push(queue[i].left);
			queue[i].right && queue.push(queue[i].right);
		}

		row++;
	}

	return result;
}
