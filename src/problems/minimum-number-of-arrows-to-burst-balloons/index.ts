export default function findMinArrowShots(points: number[][]): number {
	if (!points.length) {
		return 0;
	}

	points.sort((a, b) => {
		return a[0] - b[0];
	});

	let result = 0;
	let minEndCoordinate = Infinity;

	points.forEach((value) => {
		if (value[0] > minEndCoordinate) {
			result++;
			minEndCoordinate = value[1];
		} else {
			minEndCoordinate = Math.min(minEndCoordinate, value[1]);
		}
	});


	return result + 1;
};
