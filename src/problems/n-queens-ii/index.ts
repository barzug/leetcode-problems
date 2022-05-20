function search(y: number, n: number, column: boolean[], diagonale1: boolean[], diagonale2: boolean[]): number {
	if (y === n) {
		return 1;
	}

	let countResult = 0;

	for (let i = 0; i < n; i++) {
		if (!column[i] && !diagonale1[i - y + n] && !diagonale2[i + y]) {
			column[i] = true;
			diagonale1[i - y + n] = true;
			diagonale2[i + y] = true;

			countResult += search(y + 1, n, column, diagonale1, diagonale2)

			column[i] = false;
			diagonale1[i - y + n] = false;
			diagonale2[i + y] = false;
		}
	}

	return countResult;
}

export default function totalNQueens(n: number): number {
	return search(0, n, [], [], []);
}
