export default function findDuplicate(nums: number[]): number {
	let slowPointer = nums[0];
	let fastPointer = nums[nums[0]];

	while (slowPointer !== fastPointer) {
		slowPointer = nums[slowPointer];
		fastPointer = nums[nums[fastPointer]];
	}

	slowPointer = 0;

	while (nums[slowPointer] !== nums[fastPointer]) {
		slowPointer = nums[slowPointer];
		fastPointer = nums[fastPointer];
	}

	return nums[slowPointer];
}
