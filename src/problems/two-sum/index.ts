export default function twoSum(nums: number[], target: number): number[] {
	const map = {};

	for (let i = 0; i < nums.length; i++) {
		if (target - nums[i] in map) {
			return [map[target - nums[i]], i];
		}

		map[nums[i]] = i;
	}
}
