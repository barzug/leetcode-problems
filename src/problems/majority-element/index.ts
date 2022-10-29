export default function majorityElement(nums: number[]): number {
	if (!nums || nums.length === 0) {
		return -1
	}

	let counter = 1;
	let majority = nums[0];

	for (let i = 1; i < nums.length; i++) {
		if (counter === 0) {
			majority = nums[i];
		}


		if (nums[i] === majority) {
			counter++
		} else {
			counter--
		}
	}


	return majority;
};
