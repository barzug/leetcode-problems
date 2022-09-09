export default function minDifficulty(jobDifficulty: number[], d: number): number {
	const cache = {};
	const numOfJobs = jobDifficulty.length;
	if (numOfJobs < d) {
		return -1;
	}

	function dfs(start: number, d: number) {
		if (`${start},${d}` in cache) {
			return cache[`${start},${d}`];
		}

		if (d === 1) {
			const result = Math.max(...jobDifficulty.slice(start));
			cache[`${start},${d}`] = result;
			return result
		}

		let maxLeftElement = 0;
		let min = Infinity;
		for (let i = start; i < numOfJobs - d + 1; i++) {
			maxLeftElement = Math.max(maxLeftElement, jobDifficulty[i]);
			const right = dfs(i + 1, d - 1);

			min = Math.min(maxLeftElement + right, min);
		}

		const result = min === Infinity ? -1 : min;
		cache[`${start},${d}`] = result;
		return result;
	}

	return dfs(0, d);
}
