export default function canFinish(numCourses: number, prerequisites: number[][]): boolean {
	const graph: Array<Array<number>> = new Array(numCourses).fill(null).map(() => []);
	const nodesState = new Array(numCourses).fill(0);

	prerequisites.forEach((value) => {
		graph[value[1]].push(value[0]);
	});

	function dfs(index: number): boolean {
		// visited in current dfs search
		if (nodesState[index] === 1) {
			return false;
		}

		// already checked
		if (nodesState[index] === 2) {
			return true;
		}

		nodesState[index] = 1;

		const result = graph[index].every((value) => dfs(value));

		nodesState[index] = 2;

		return result;
	}

	return graph.every((_, index) => {
		if (nodesState[index] === 0) {
			return dfs(index);
		}

		return true;
	});
}
