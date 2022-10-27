export default function topKFrequent(nums: number[], k: number): number[] {
	// bruteforce - create map, sort by frequent = O(nlogn)
	// more optimal - array by frequency

	const freqMap = new Map();
	const freqArrayOfArrays: number[][] = [];

	nums.forEach((value) => freqMap.set(value, (freqMap.get(value) || 0) + 1));

	freqMap.forEach((value, key) => {
		if (!freqArrayOfArrays[value]) {
			freqArrayOfArrays[value] = [];
		}

		freqArrayOfArrays[value].push(key);
	});

	const result = [];
	for (let i = freqArrayOfArrays.length - 1; i >= 0; i--) {
		if (!freqArrayOfArrays[i]) {
			continue;
		}

		result.push(...freqArrayOfArrays[i]);

		if (result.length >= k) {
			return result;
		}
	}

	return result;
}
