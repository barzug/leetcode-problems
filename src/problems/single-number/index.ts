// You must implement a solution with a linear runtime complexity and use only constant extra space.
export default function singleNumber(nums: number[]): number {
	let res = 0;

	nums.forEach((num) => {
		res ^= num;
	});

	return res;
}
