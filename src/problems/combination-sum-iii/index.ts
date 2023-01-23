export default function combinationSum3(k: number, n: number): number[][] {
	const result = [];

	function backtracking(current: number[], start: number, summ: number) {
		if (current.length === k && summ === n) {
			result.push(current.slice());

			return;
		}

		if (summ >= n || current.length >= k) {
			return;
		}

		for (let i = start; i <= 9; i++) {
			current.push(i);
			backtracking(current, i + 1, summ + i);
			current.pop();
		}
	}

	backtracking([], 1, 0);

	return result;
}
