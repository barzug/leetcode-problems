class ListNode {
	val: number;
	next: ListNode | null;

	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
	if (!head) {
		return null;
	}

	let listLength = 1;

	let pointer = head;
	while (pointer.next !== null) {
		pointer = pointer.next;
		listLength++;
	}

	let numberOfSteps = k % listLength;
	if (numberOfSteps === 0) {
		return head;
	}

	pointer.next = head;
	while (listLength > numberOfSteps) {
		pointer = pointer.next;
		numberOfSteps++;
	}

	const newHead = pointer.next;
	pointer.next = null;

	return newHead;
}
