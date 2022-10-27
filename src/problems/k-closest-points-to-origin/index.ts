function euclideanDistance(pointA: [number, number], pointB: [number, number]): number {
	return Math.sqrt(Math.pow(pointA[0] - pointB[0], 2) + Math.pow(pointA[1] - pointB[1], 2));
}

export default function kClosest(points: Array<[number, number]>, k: number): number[][] {
	function sortByKth(array: Array<[number, number]>, left: number, right: number, k: number) {
		if (right - left <= 0) {
			return left;
		}

		const partition = array[left]; // could be optimized

		let p = left + 1;
		let q = right;

		while (true) {
			while (array[p] && euclideanDistance(array[p], [0, 0]) < euclideanDistance(partition, [0, 0])) {
				p++;
			}

			while (euclideanDistance(array[q], [0, 0]) > euclideanDistance(partition, [0, 0])) {
				q--;
			}

			if (p >= q) {
				break;
			}

			[array[q], array[p]] = [array[p], array[q]];
			p++;
			q--;
		}

		[array[left], array[q]] = [array[q], array[left]];

		if (q === k) {
			return;
		}

		if (q > k) {
			sortByKth(array, left, q - 1, k);
		} else {
			sortByKth(array, q + 1, right, k);
		}
	}

	const copyOfArray = [...points];
	sortByKth(copyOfArray, 0, points.length - 1, k);

	return copyOfArray.slice(0, k);
}
