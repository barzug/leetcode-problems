export default function removeOuterParentheses(s: string): string {
	let startPosition = 0;
	let nesting = 0;
	let result = '';

	for (let i = 0; i < s.length; i++) {
		switch (s[i]) {
			case '(':
				nesting++;

				break;
			case ')':
				nesting--;

				if (nesting === 0) {
					result += s.slice(startPosition + 1, i);

					startPosition = i + 1;
				}

				break;
		}
	}

	return result;
}
