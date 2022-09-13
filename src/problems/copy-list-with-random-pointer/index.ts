class Node {
	val: number;
	next: Node | null;
	random: Node | null;

	constructor(val?: number, next?: Node, random?: Node) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
		this.random = random === undefined ? null : random;
	}
}

export default function copyRandomList(head: Node | null): Node | null {
	if (!head) {
		return null;
	}

	const map = new Map<Node, Node>();

	const result = new Node(head.val, null, head.random);
	let resultPointer = result;
	map.set(head, result);

	let pointer = head.next;
	while (pointer !== null) {
		resultPointer.next = new Node(pointer.val, null, pointer.random);
		resultPointer = resultPointer.next;

		map.set(pointer, resultPointer);

		pointer = pointer.next;
	}

	pointer = result;
	while (pointer !== null) {
		if (pointer.random) {
			pointer.random = map.get(pointer.random);
		}

		pointer = pointer.next;
	}

	return result;
}
