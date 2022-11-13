const LETTER_NUMBER_MAP = {
	'2': ['a', 'b', 'c'],
	'3': ['d', 'e', 'f'],
	'4': ['g', 'h', 'i'],
	'5': ['j', 'k', 'l'],
	'6': ['m', 'n', 'o'],
	'7': ['p', 'q', 'r', 's'],
	'8': ['t', 'u', 'v'],
	'9': ['w', 'x', 'y', 'z'],
};

export default function letterCombinations(digits: string): string[] {
	if (!digits.length) {
		return [];
	}

	let previousRow = [''];
	for (let i = 0; i < digits.length; i++) {
		const nextRow = [];
		previousRow.forEach((previousWord) => {
			LETTER_NUMBER_MAP[digits[i]]?.forEach((symbol) => {
				nextRow.push(previousWord + symbol)
			})
		});

		previousRow = nextRow;
	}

	return previousRow;
}
