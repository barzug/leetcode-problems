export default function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
	if (!image || !image[0]) {
		return;
	}

	const yLength = image.length - 1;
	const xLength = image[0].length - 1;

	const previousColor = image[sr][sc];

	function _dfsFill(sr, sc) {
		if (image[sr][sc] === color || image[sr][sc] !== previousColor) {
			return;
		}

		image[sr][sc] = color;

		sr > 0 && _dfsFill(sr - 1, sc);
		sr < yLength && _dfsFill(sr + 1, sc);
		sc > 0 && _dfsFill(sr, sc - 1);
		sc < xLength && _dfsFill(sr, sc + 1);
	}

	_dfsFill(sr, sc);

	return image;
}
