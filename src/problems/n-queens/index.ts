function search(y: number, n: number, column: boolean[], diagonale1: boolean[], diagonale2: boolean[], positions: number[], result: string[][]) {
	if (y === n) {
		let resultArray = [];
		for (let i = 0; i < n; i++) {
			resultArray.push(`${'.'.repeat(positions[i])}Q${'.'.repeat(n - positions[i] - 1)}`)
		}

		result.push(resultArray)
	}

	let countResult = 0;

	for (let i = 0; i < n; i++) {
		if (!column[i] && !diagonale1[i - y + n] && !diagonale2[i + y]) {
			column[i] = true;
			diagonale1[i - y + n] = true;
			diagonale2[i + y] = true;
			positions.push(i);

			search(y + 1, n, column, diagonale1, diagonale2, positions, result)

			positions.pop();
			column[i] = false;
			diagonale1[i - y + n] = false;
			diagonale2[i + y] = false;
		}
	}

	return countResult;
}

export default function solveNQueens(n: number): string[][] {
	const result = []
	search(0, n, [], [], [], [], result);

	return result;
}
