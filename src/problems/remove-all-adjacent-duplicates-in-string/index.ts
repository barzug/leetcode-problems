export default function removeDuplicates(s: string): string {
	const stack = [];

	for (let i = 0; i < s.length; i++) {
		if (s[i] !== stack[stack.length - 1]) {
			stack.push(s[i]);

			continue;
		}

		stack.pop();
	}

	return stack.join('');
}
