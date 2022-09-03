import mergeTwoLists, {ListNode} from '@/problems/merge-two-sorted-lists'


function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
	let remainLists = lists;
	while (remainLists.length > 1) {
		for (let i = 0; i < remainLists.length; i += 2) {
			remainLists[Math.floor(i / 2)] = mergeTwoLists(remainLists[i], remainLists[i + 1] || null);
		}

		remainLists.length = Math.ceil(lists.length / 2);
	}

	return remainLists[0] || null;
}
