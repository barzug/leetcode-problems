export default function lengthOfLIS(nums: number[]): number {
	// tails shows the lower last element of sequence of i elements
	const tails = []

	nums.forEach((num) => {
		let first = 0;
		let last = tails.length;

		while (first < last) {
			const mid = first + Math.floor((last - first) / 2)

			if (tails[mid] < num) {
				first = mid + 1;
			} else {
				last = mid;
			}
		}

		tails[first] = num;
	})

	return tails.length;
};
