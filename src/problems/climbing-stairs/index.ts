export default function climbStairs(n: number): number {
	if (n < 3) {
		return n;
	}

	let prev = 1;
	let current = 2;
	for (let i = 3; i <= n; i++) {
		let newCurrent = prev + current;
		prev = current;
		current = newCurrent;
	}

	return current;
}
