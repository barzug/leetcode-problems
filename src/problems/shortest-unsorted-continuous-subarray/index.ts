export default function findUnsortedSubarray(nums: number[]): number {
	const leftStack = [];
	let left = Infinity;
	nums.forEach((value, index) => {
		while (leftStack.length && value < nums[leftStack[leftStack.length - 1]]) {
			left = Math.min(leftStack.pop(), left);
		}

		leftStack.push(index);
	})

	const rightStack = [];
	let right = 0;
	for (let i = nums.length - 1; i >= 0; i--) {
		while (rightStack.length && nums[i] > nums[rightStack[rightStack.length - 1]]) {
			right = Math.max(rightStack.pop(), right);
		}

		rightStack.push(i);
	}

	return right > left ? right - left + 1 : 0;
}
