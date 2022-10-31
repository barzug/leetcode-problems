export default function orangesRotting(grid: number[][]): number {
	const rottenOrangesQueue = [];
	const rottenMap = {};
	let numberOfFresh = 0;

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === 2) {
				rottenOrangesQueue.push({ i, j });
				rottenMap[`${i}#${j}`] = true;
			}

			if (grid[i][j] === 1) {
				numberOfFresh++;
			}
		}
	}

	let numberOfDays = 0;
	let rottenOrangesStartIndex = 0;
	while (rottenOrangesStartIndex < rottenOrangesQueue.length && numberOfFresh !== 0) {
		numberOfDays++;

		const currentEndIndex = rottenOrangesQueue.length;
		for (; rottenOrangesStartIndex < currentEndIndex; rottenOrangesStartIndex++) {
			const { i, j } = rottenOrangesQueue[rottenOrangesStartIndex];

			[
				[i + 1, j],
				[i, j + 1],
				[i - 1, j],
				[i, j - 1],
			].forEach(([_i, _j]) => {
				if (_i < 0 || _j < 0 || _i === grid.length || _j === grid[_i].length) {
					return;
				}

				if (grid[_i][_j] !== 1) {
					return;
				}

				if (rottenMap[`${_i}#${_j}`]) {
					return;
				}

				rottenOrangesQueue.push({ i: _i, j: _j });
				rottenMap[`${_i}#${_j}`] = true;
				numberOfFresh--;
			});
		}
	}

	return numberOfFresh === 0 ? numberOfDays : -1;
}

// DFS Solution
// export default function orangesRotting(grid: number[][]): number {
// 	const markedMatrix: number[][] = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(Infinity));
//
// 	function dfs(i, j, value) {
// 		if (grid[i][j] === 0) {
// 			return;
// 		}
//
// 		if (markedMatrix[i][j] < value) {
// 			return;
// 		}
//
// 		markedMatrix[i][j] = value;
//
// 		i > 0 && dfs(i - 1, j, value + 1);
// 		j > 0 && dfs(i, j - 1, value + 1);
//
// 		i < grid.length - 1 && dfs(i + 1, j, value + 1);
// 		j < grid[i].length - 1 && dfs(i, j + 1, value + 1);
// 	}
//
// 	for (let i = 0; i < grid.length; i++) {
// 		for (let j = 0; j < grid[i].length; j++) {
// 			if (grid[i][j] === 0) {
// 				markedMatrix[i][j] = 0;
// 			}
//
// 			if (grid[i][j] === 2) {
// 				dfs(i, j, 0);
// 			}
// 		}
// 	}
//
// 	const maxValue = Math.max(...markedMatrix.reduce((accum, value) => accum.concat(value), []));
//
// 	return maxValue === Infinity ? -1 : maxValue;
// }
