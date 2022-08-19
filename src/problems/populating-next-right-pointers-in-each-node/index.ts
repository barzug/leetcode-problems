class Node {
	val: number;
	left: Node | null;
	right: Node | null;
	next: Node | null;

	constructor(val?: number, left?: Node, right?: Node, next?: Node) {
		this.val = (val === undefined ? 0 : val);
		this.left = (left === undefined ? null : left);
		this.right = (right === undefined ? null : right);
		this.next = (next === undefined ? null : next);
	}
}

// Follow-up:
// You may only use constant extra space.
// The recursive approach is fine. You may assume implicit stack space does not count as extra space for this problem.

export default function connect(root: Node | null): Node | null {
	if (!root) {
		return null;
	}

	root.next = null;
	let nextRowElement = null;

	function bfsModify(element: Node | null, isFirst: boolean) {
		if (!element) {
			return;
		}

		if (isFirst) {
			nextRowElement = element.left
		}

		if (element.left) {
			element.left.next = element.right;
			element.right.next = element.next?.left;
		}

		if (element.next) {
			bfsModify(element.next, false)
		} else {
			bfsModify(nextRowElement, true)
		}
	}

	bfsModify(root, true);

	return root;
};
