import { TreeNode } from '@/algorithms/createBinaryTreeFromArray';

export default function lowestCommonAncestor(
	root: TreeNode | null,
	p: TreeNode | null,
	q: TreeNode | null
): TreeNode | null {
	if (!root || !p || !q) {
		return null;
	}

	const pVal = p.val;
	const qVal = q.val;

	let current = root;

	while (true) {
		if (current.val > pVal && current.val > qVal) {
			current = current.left;
			continue;
		}

		if (current.val < pVal && current.val < qVal) {
			current = current.right;
			continue;
		}

		return current;
	}
}
