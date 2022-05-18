export default function eraseOverlapIntervals(intervals: number[][]): number {
	if (intervals.length <= 1) {
		return 0
	}

	intervals.sort((a, b) => a[1] - b[1])

	let result = 0;
	let last = intervals[0][1];
	for (let i = 1; i < intervals.length; i++) {
		if (intervals[i][0] < last) {
			result++
		} else {
			last = intervals[i][1];
		}
	}

	return result
};
