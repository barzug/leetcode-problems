export default function minAddToMakeValid(s: string): number {
	let numberOfOpenParentheses = 0;
	let result = 0;

	for (let i = 0; i < s.length; i++) {
		switch (s[i]) {
			case '(':
				numberOfOpenParentheses++

				break;
			case ')':
				if (numberOfOpenParentheses === 0) {
					result++
				} else {
					numberOfOpenParentheses--
				}

				break;
		}
	}

	return result + numberOfOpenParentheses;
};
