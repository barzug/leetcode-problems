export default function productExceptSelf(nums: number[]): number[] {
	const result = new Array(nums.length);
	let multiplicator = 1;

	for (let i = 0; i < nums.length; i++) {
		result[i] = multiplicator;
		multiplicator *= nums[i];
	}

	multiplicator = 1;
	for (let i = nums.length - 1; i >= 0; i--) {
		result[i] *= multiplicator;
		multiplicator *= nums[i];
	}

	return result;
};
