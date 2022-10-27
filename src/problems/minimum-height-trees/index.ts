export default function findMinHeightTrees(n: number, edges: number[][]): number[] {
	const nodes: Array<Array<number>> = new Array(n).fill(null).map(() => []);

	edges.forEach(([from, to]) => {
		nodes[from].push(to);
		nodes[to].push(from);
	});

	let leaves: number[] = [];
	nodes.map((children, index) => {
		if (children.length <= 1) {
			leaves.push(index);
		}
	});

	let numberOfNodes = n;
	while (numberOfNodes > 2) {
		numberOfNodes -= leaves.length;
		let nextLeaves: number[] = [];

		leaves.forEach((nodeIndex) => {
			const linkedNode = nodes[nodeIndex].pop();
			nodes[linkedNode] = nodes[linkedNode].filter((value) => value !== nodeIndex);

			nodes[linkedNode].length === 1 && nextLeaves.push(linkedNode);
		});

		leaves = nextLeaves;
	}

	return leaves;
}
