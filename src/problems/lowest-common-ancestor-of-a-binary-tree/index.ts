import {TreeNode} from '@/algorithms/createBinaryTreeFromArray';


export default function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if (!root || !p || !q) {
		return null;
	}

	const stack = [root];
	const stackRootMap = []

	let i = 0;
	while (i !== stack.length) {
		if (stack[i].left !== null && typeof stack[i].left !== 'undefined') {
			stack.push(stack[i].left);
			stackRootMap[stack.length - 1] = i;
		}

		if (stack[i].right !== null && typeof stack[i].right !== 'undefined') {
			stack.push(stack[i].right);
			stackRootMap[stack.length - 1] = i;
		}

		i++
	}

	while (stack.length && p !== q) {
		let value = stack.pop();

		if (value === p) {
			p = stack[stackRootMap[stack.length]]
		}

		if (value === q) {
			q = stack[stackRootMap[stack.length]]
		}
	}

	return p === q ? p : null;
};
