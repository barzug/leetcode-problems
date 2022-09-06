export default function numIslands(grid: string[][]): number {
	const markedArray: number[][] = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(0));

	function dfs(i: number, j: number, value: number): boolean {
		if (i < 0 || i >= grid.length) {
			return true;
		}

		if (j < 0 || j >= grid[0].length) {
			return true;
		}

		if (grid[i][j] === '0') {
			return true;
		}

		if (markedArray[i][j] !== 0) {
			return markedArray[i][j] === value;
		}

		markedArray[i][j] = value;

		return dfs(i + 1, j, value) && dfs(i - 1, j, value) && dfs(i, j + 1, value) && dfs(i, j - 1, value);
	}

	let numIslands = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === '1' && markedArray[i][j] === 0) {
				if (dfs(i, j, numIslands + 1)) {
					numIslands++;
				}
			}
		}
	}

	return numIslands;
}
