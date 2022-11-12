export default function canPartition(nums: number[]): boolean {
	const sum = nums.reduce((accum, value) => accum + value, 0);
	if (sum % 2 !== 0) {
		return false;
	}
	const halfSum = Math.round(sum / 2);

	const canReach: boolean[] = new Array(halfSum + 1).fill(false);
	canReach[0] = true;

	nums.forEach((num) => {
		// it is important to go in reverse order, otherwise we will add the number several times
		for (let i = canReach.length; i >= num; i--) {
			canReach[i] = canReach[i] || canReach[i - num]
		}
	})

	return canReach[halfSum];
}
