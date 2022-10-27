export default function longestPalindrome(s: string): number {
	const letters = {};

	for (let i = 0; i < s.length; i++) {
		if (!letters[s[i]]) {
			letters[s[i]] = 0;
		}

		letters[s[i]]++
	}

	let result = 0;
	let hasMiddleSymbol = false;
	Object.keys(letters).forEach((letter) => {
		if (letters[letter] % 2 === 0) {
			result += letters[letter];
		} else {
			hasMiddleSymbol = true;
			result += letters[letter] - 1;
		}
	})

	if (hasMiddleSymbol) {
		result++;
	}

	return result;
};
