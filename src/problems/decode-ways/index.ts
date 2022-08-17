export default function numDecodings(s: string): number {
	if (s == null || s.length === 0) {
		return 0;
	}

	if (s[0] === '0') {
		return 0;
	}

	const cache = new Array(s.length + 1).fill(0);
	cache[0] = 1;
	cache[1] = 1;

	for (let i = 2; i <= s.length; i++) {
		const oneDigit = Number(s.slice(i - 1, i));
		const twoDigits = Number(s.slice(i - 2, i));

		if (oneDigit >= 1 && oneDigit <= 9) {
			cache[i] += cache[i - 1];
		}
		if (twoDigits >= 10 && twoDigits <= 26) {
			cache[i] += cache[i - 2];
		}
	}

	return cache[s.length];
};
