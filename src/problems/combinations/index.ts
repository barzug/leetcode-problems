export default function combine(n: number, k: number): number[][] {
	const result = [];

	function backtracking(current: number[], start: number) {
		if (current.length === k) {
			result.push(current.slice());

			return
		}

		for (let i = start; i <= n; i++) {
			current.push(i);
			backtracking(current, i + 1)
			current.pop();
		}
	}

	backtracking([], 1)

	return result;
};
