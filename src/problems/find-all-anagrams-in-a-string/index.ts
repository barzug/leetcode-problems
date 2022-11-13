export default function findAnagrams(s: string, p: string): number[] {
	const resultSymbols: { [key: string]: number } = {};

	for (let i = 0; i < p.length; i++) {
		if (!(p[i] in resultSymbols)) {
			resultSymbols[p[i]] = 0;
		}

		resultSymbols[p[i]]++;
	}

	const wordLength = p.length;
	const result: number[] = [];

	let remainZeros = Object.keys(resultSymbols).length;

	for (let i = 0; i < wordLength; i++) {
		if (s[i] in resultSymbols) {
			resultSymbols[s[i]]--;

			if (resultSymbols[s[i]] === 0) {
				remainZeros--;
			}
		}
	}

	for (let i = 0; i < s.length - wordLength + 1; i++) {
		if (remainZeros === 0) {
			result.push(i);
		}

		if (s[i] in resultSymbols) {
			resultSymbols[s[i]]++;

			if (resultSymbols[s[i]] === 1) {
				remainZeros++;
			}
		}

		if (s[i + wordLength] in resultSymbols) {
			resultSymbols[s[i + wordLength]]--;

			if (resultSymbols[s[i + wordLength]] === 0) {
				remainZeros--;
			}
		}
	}

	return result;
}
