// time complexity O(log (m+n)).
// it means it has to be binarySearch (2)
// arrays are sorted, it means that middle element is median of each array

// the problem is how to find the k-th element in two arrays
export default function findMedianSortedArrays(nums1: number[], nums2: number[]): number | null {
	const length = nums1.length + nums2.length;

	const k = Math.floor(length / 2) + 1;
	if (length % 2 === 0) {
		return (getKth(nums1, nums2, k - 1) + getKth(nums1, nums2, k)) / 2;
	} else {
		return getKth(nums1, nums2, k);
	}
}

function getKth(nums1: number[], nums2: number[], k: number): number | null {
	if (nums1.length > nums2.length) {
		return getKth(nums2, nums1, k);
	}

	let low = Math.max(0, k - nums2.length);
	let high = Math.min(nums1.length, k);

	while (low <= high) {
		const middle = Math.floor((low + high) / 2);
		const l1 = middle === 0 ? -Infinity : nums1[middle - 1];
		const l2 = k === middle ? -Infinity : nums2[k - middle - 1];
		const r1 = middle >= nums1.length ? Infinity : nums1[middle];
		const r2 = k - middle >= nums2.length ? Infinity : nums2[k - middle];

		if (l1 <= r2 && l2 <= r1) {
			return Math.max(l1, l2);
		}

		if (l1 > r2) {
			high = middle;
		} else {
			low = middle + 1;
		}
	}

	return nums2[low];
}
