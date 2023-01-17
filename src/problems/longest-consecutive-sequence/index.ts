export default function longestConsecutive(nums: number[]): number {
	const sequences = {};

	nums.forEach((element) => {
		sequences[element] = 1;
	});

	let max = 0;
	Object.keys(sequences).forEach((key) => {
		if (sequences[key] !== 1) {
			return;
		}

		let currentKey = Number(key) - 1;
		let current = 1;
		while (sequences[currentKey]) {
			current += sequences[currentKey];
			sequences[currentKey] = 0;

			currentKey = currentKey - 1;
		}

		sequences[key] = current;
		max = Math.max(current, max);
	});

	return max;
}
