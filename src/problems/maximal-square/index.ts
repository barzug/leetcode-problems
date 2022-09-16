export default function maximalSquare(matrix: string[][]): number {
	const dpMatrix = new Array(matrix[0].length).fill(0);
	let prevLeftElement = 0;

	let maxSquareSide = 0;
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] !== '1') {
				dpMatrix[j] = 0;
				continue
			}

			const updatedElement = Math.min(prevLeftElement, dpMatrix[j], j > 0 ? dpMatrix[j - 1] : 0) + 1;

			prevLeftElement = dpMatrix[j];
			dpMatrix[j] = updatedElement;

			maxSquareSide = Math.max(updatedElement, maxSquareSide);
		}

		prevLeftElement = 0;
	}

	return maxSquareSide * maxSquareSide;
}
