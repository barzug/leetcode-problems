export default function wordBreak(s: string, wordDict: string[]): boolean {
	const wordSet = new Set(wordDict);

	const resultArray = new Array(s.length + 1).fill(false);
	resultArray[0] = true;

	for (let end = 1; end < s.length + 1; end++) {
		for (let start = 0; start < end && !resultArray[end]; start++) {
			if (resultArray[start]) {
				const word = s.slice(start, end);

				if (wordSet.has(word)) {
					resultArray[end] = true;
				}
			}
		}
	}

	return resultArray[s.length];
}
