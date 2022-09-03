export class ListNode {
	val: number;
	next: ListNode | null;

	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}


export default function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
	if (!list1) {
		return list2;
	}
	if (!list2) {
		return list1
	}

	let p1 = list1;
	let p2 = list2;
	let pRes

	if (p1.val < p2.val) {
		pRes = p1;
		p1 = p1.next;
	} else {
		pRes = p2;
		p2 = p2.next
	}
	const result = pRes;

	while (p1 || p2) {
		if (!p1) {
			pRes.next = p2;

			break;
		}

		if (!p2) {
			pRes.next = p1;

			break;
		}

		if (p1.val <= p2.val) {
			pRes.next = p1;
			pRes = pRes.next;
			p1 = p1.next;
		} else {
			pRes.next = p2;
			pRes = pRes.next;
			p2 = p2.next;
		}
	}

	return result
}
