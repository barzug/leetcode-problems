export default function minPathSum(grid: number[][]): number {
	if (!grid.length || !grid[0].length) {
		return 0;
	}

	const pathes = new Array(grid.length).fill(0).map(() => new Array(grid[0].length));

	pathes[0][0] = grid[0][0];
	for (let i = 1; i < grid.length; i++) {
		pathes[i][0] = pathes[i - 1][0] + grid[i][0];
	}

	for (let j = 1; j < grid[0].length; j++) {
		pathes[0][j] = pathes[0][j - 1] + grid[0][j];
	}

	for (let i = 1; i < grid.length; i++) {
		for (let j = 1; j < grid[i].length; j++) {
			pathes[i][j] = Math.min(pathes[i - 1][j], pathes[i][j - 1]) + grid[i][j];
		}
	}

	return pathes[grid.length - 1][grid[0].length - 1];
}
