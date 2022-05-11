export default function minRemoveToMakeValid(s: string): string {
	let nesting = 0;
	let result: Array<string> = [];
	let openParenthesesPositions: Array<number> = [];

	for (let i = 0; i < s.length; i++) {
		switch (s[i]) {
			case '(':
				nesting++;

				openParenthesesPositions.push(result.length);
				result.push(s[i]);

				break;
			case ')':
				if (nesting !== 0) {
					nesting--;
					result.push(s[i]);
				}

				break;
			default:
				result.push(s[i]);
		}
	}

	while (nesting > 0) {
		result[openParenthesesPositions.pop()] = '';

		nesting--;
	}

	return result.join('');
}
