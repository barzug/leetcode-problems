export default function findDuplicates(nums: number[]): number[] {
	const result = [];

	nums.forEach((element) => {
		const index = Math.abs(element) - 1;

		if (nums[index] < 0) {
			result.push(index + 1)
		} else {
			nums[index] = -nums[index]
		}
	})

	return result;
};

