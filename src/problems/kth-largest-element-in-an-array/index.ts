function partition(nums: number[], k: number, first: number, last: number): number {
	if (last - first <= 0) {
		return last;
	}

	const pivot = Math.floor((last - first) / 2) + first;
	[nums[pivot], nums[first]] = [nums[first], nums[pivot]]

	let i = first + 1;
	let j = last;
	while (true) {
		while (nums[i] < nums[first]) {
			i++
		}

		while (nums[j] > nums[first]) {
			j--
		}

		if (j <= i) {
			break;
		}

		[nums[i], nums[j]] = [nums[j], nums[i]]
		i++
		j--
	}

	[nums[first], nums[j]] = [nums[j], nums[first]]

	if (j === k) {
		return j;
	}

	if (j > k) {
		return partition(nums, k, first, j - 1)
	} else {
		return partition(nums, k,j + 1, last)
	}
}

export default function findKthLargest(nums: number[], k: number): number {
	const partitionElement = partition(nums, nums.length - k, 0, nums.length - 1)

	return nums[partitionElement];
};
