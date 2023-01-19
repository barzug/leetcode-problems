export default function permuteUnique(nums: number[]): number[][] {
	const result = [];

	const stack = [];
	function backtracking(options: number[]) {
		if (!options.length) {
			result.push(stack.slice());
			return;
		}

		let previousOption = null;
		for (let i = 0; i < options.length; i++) {
			if (options[i] === previousOption) {
				continue;
			}

			stack.push(options[i]);
			backtracking([...options.slice(0, i), ...options.slice(i + 1)]);
			stack.pop();

			previousOption = options[i];
		}
	}
	backtracking(nums.slice().sort());

	return result;
}
