export default function permute(nums: number[]): number[][] {
	const result = [];

	const stack = [];
	function backtracking(options: number[]) {
		if (!options.length) {
			result.push(stack.slice());
			return;
		}

		for (let i = 0; i < options.length; i++) {
			stack.push(options[i]);
			backtracking([...options.slice(0, i), ...options.slice(i + 1)]);
			stack.pop();
		}
	}
	backtracking(nums);

	return result;
}
