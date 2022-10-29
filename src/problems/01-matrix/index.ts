export default function updateMatrix(mat: number[][]): number[][] {
	const m = mat.length;
	const n = mat[0].length;

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (mat[i][j] !== 0) {
				mat[i][j] = Math.min(i > 0 ? mat[i - 1][j] : Infinity, j > 0 ? mat[i][j - 1] : Infinity) + 1;
			}
		}
	}

	for (let i = m - 1; i >= 0; i--) {
		for (let j = n - 1; j >= 0; j--) {
			mat[i][j] = Math.min(
				mat[i][j],
				Math.min(i === m - 1 ? Infinity : mat[i + 1][j], j === n - 1 ? Infinity : mat[i][j + 1]) + 1
			);
		}
	}

	return mat;
}
