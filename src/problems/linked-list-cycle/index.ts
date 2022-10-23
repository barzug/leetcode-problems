class Node {
	val: number;
	next: Node | null;

	constructor(val?: number, next?: Node, random?: Node) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

export default function hasCycle(head: ListNode | null): boolean {
	let basePoiner = head?.next;
	let doublePointer = head?.next?.next;

	while (doublePointer && basePoiner !== doublePointer) {
		basePoiner = basePoiner.next;
		doublePointer = doublePointer.next?.next;
	}


	return !!doublePointer;
};
