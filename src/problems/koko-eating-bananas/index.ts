function isValid(piles: number[], h: number, k: number): boolean {
	let count = 0;

	piles.forEach((value) => {
		count += Math.ceil(value / k);
	});

	return count <= h;
}

export default function minEatingSpeed(piles: number[], h: number): number {
	let l = 1;
	let r = Math.max(...piles);

	while (l < r) {
		const mid = l + Math.floor((r - l) / 2);

		if (isValid(piles, h, mid)) {
			r = mid;
		} else {
			l = mid + 1;
		}
	}

	return l;
}
