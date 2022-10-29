export default function insert(intervals: number[][], newInterval: number[]): number[][] {
	const result = [];
	let currentInsertedInterval = newInterval;
	for (let i = 0; i < intervals.length; i++) {
		let interval = intervals[i];

		if (Math.max(interval[0], currentInsertedInterval[0]) <= Math.min(interval[1], currentInsertedInterval[1])) {
			currentInsertedInterval = [Math.min(interval[0], currentInsertedInterval[0]), Math.max(interval[1], currentInsertedInterval[1])]

			continue;
		}

		if (interval[0] > currentInsertedInterval[1]) {
			result.push(currentInsertedInterval, ...intervals.slice(i));
			return result;
		}

		result.push(interval);
	}

	result.push(currentInsertedInterval);

	return result;
}
