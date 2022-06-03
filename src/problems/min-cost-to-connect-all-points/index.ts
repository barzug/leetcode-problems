import QuickUnion from '@/dataStructures/QuickUnion';

function manhattanDistance(pointA: [number, number], pointB: [number, number]): number {
	return Math.abs(pointA[0] - pointB[0]) + Math.abs(pointA[1] - pointB[1]);
}

export default function minCostConnectPoints(points: Array<[number, number]>): number {
	const priorities: [number, number, number][] = [];

	for (let i = 0; i < points.length; i++) {
		for (let j = i + 1; j < points.length; j++) {
			const distance = manhattanDistance(points[i], points[j]);

			priorities.push([distance, i, j]);
		}
	}

	priorities.sort(([distance1], [distance2]) => distance1 - distance2);

	const unionFind = new QuickUnion(points.length);
	let cost = 0;
	priorities.forEach(([distance, i, j]) => {
		if (!unionFind.connected(i, j)) {
			unionFind.unify(i, j);
			cost += distance;
		}
	});

	return cost;
}
