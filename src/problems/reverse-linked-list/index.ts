class Node {
	val: number;
	next: Node | null;

	constructor(val?: number, next?: Node) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

export default function reverseList(head: ListNode | null): ListNode | null {
	if (!head) {
		return
	}

	let pointer = head;
	let nextPointer = head.next
	let nextNextPointer = head.next?.next;

	head.next = null;

	while (nextPointer !== null) {
		nextPointer.next = pointer;
		pointer = nextPointer;
		nextPointer = nextNextPointer;
		nextNextPointer = nextNextPointer?.next;
	}

	return pointer;
};
