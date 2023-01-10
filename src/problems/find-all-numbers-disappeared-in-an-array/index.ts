// Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
export default function findDisappearedNumbers(nums: number[]): number[] {
	nums.forEach((value) => {
		const positiveIndex = Math.abs(value) - 1

		nums[positiveIndex] = -Math.abs(nums[positiveIndex]);
	});

	const resultArray = [];

	nums.forEach((value, index) => {
		if (value > 0) {
			resultArray.push(index + 1)
		}
	});

	return resultArray;
}
