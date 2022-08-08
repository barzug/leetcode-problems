export default function exist(board: string[][], word: string): boolean {
	if (!board.length || !board[0].length) {
		return false;
	}

	const h = board.length;
	const w = board[0].length;
	const directions = [
		[-1, 0],
		[0, 1],
		[1, 0],
		[0, -1],
	];

	const visitedIndexes = [];

	function dfs(x, y, wordIndex: number) {
		if (wordIndex === word.length) {
			return true;
		}

		if (
			x === h ||
			y === w ||
			x < 0 ||
			y < 0 ||
			board[x][y] !== word[wordIndex] ||
			visitedIndexes.includes(`${x},${y}`)
		) {
			return false;
		}

		visitedIndexes.push(`${x},${y}`);

		const result = directions.some(([dx, dy]) => {
			return dfs(x + dx, y + dy, wordIndex + 1);
		});

		visitedIndexes.pop();
		return result;
	}

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			const result = dfs(i, j, 0);

			if (result) {
				return true;
			}
		}
	}

	return false;
}
