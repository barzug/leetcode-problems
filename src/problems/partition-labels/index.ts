export default function partitionLabels(s: string): number[] {
	const lastStringPosition: {[key: string]: number} = {}

	for (let i = 0; i < s.length; i++) {
		lastStringPosition[s[i]] = i;
	}


	const result = [];
	let lastPartitionPosition = 0;
	let summ = 0;
	for (let i = 0; i < s.length; i++) {
		summ++;
		lastPartitionPosition = Math.max(lastPartitionPosition, lastStringPosition[s[i]]);

		if (lastPartitionPosition === i) {
			result.push(summ);
			summ = 0;
			lastPartitionPosition = i + 1;
		}
	}

	if (summ > 0) {
		result.push(summ);
	}

	return result;
};
