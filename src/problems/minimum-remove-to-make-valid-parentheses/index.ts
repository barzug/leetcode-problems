export default function minRemoveToMakeValid(s: string): string {
	let result: Array<string> = s.split('');

	let openParenthesesPositions: Array<number> = [];

	for (let i = 0; i < result.length; i++) {
		if (result[i] === '(') {
			openParenthesesPositions.push(i);
		} else if (result[i] === ')') {
			if (openParenthesesPositions.length) {
				openParenthesesPositions.pop();
			} else {
				result[i] = '';
			}
		}
	}

	for (let i = 0; i < openParenthesesPositions.length; i++) {
		result[openParenthesesPositions[i]] = '';
	}

	return result.join('');
}
