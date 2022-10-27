export default function criticalConnections(n: number, connections: number[][]): number[][] {
	const graph = new Array(n + 1).fill(0).map(() => []);
	connections.forEach(([node1, node2]) => {
		graph[node1].push(node2);
		graph[node2].push(node1);
	});

	const graphMarks = new Array(n + 1).fill(-1);

	const resultNode = [];

	function _dfsTarjan(node: number, previousNode: number, index: number): number {
		if (graphMarks[node] !== -1) {
			return graphMarks[node];
		}

		graphMarks[node] = index;
		let lowestRank = index;
		for (let i = 0; i < graph[node].length; i++) {
			const next = graph[node][i];
			if (next === previousNode || graphMarks[next] === n) {
				continue;
			}

			if (graphMarks[next] !== -1) {
				lowestRank = Math.min(graphMarks[next], lowestRank);

				continue;
			}

			const oldestValue = _dfsTarjan(next, node, index + 1);

			if (oldestValue > graphMarks[node]) {
				resultNode.push([node, next]);
			}

			lowestRank = Math.min(oldestValue, lowestRank);
		}

		return lowestRank;
	}

	_dfsTarjan(0, 0, 0);

	return resultNode;
}
