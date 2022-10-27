function checkDistanceIsOne(word1, word2): boolean {
	let distance = 0;

	for (let i = 0; i < word1.length && distance <= 1; i++) {
		if (word1[i] !== word2[i]) {
			distance++;
		}
	}

	return distance === 1;
}

export default function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
	if (beginWord === endWord || !wordList.includes(endWord)) {
		return 0;
	}

	const alreadyChecked = new Array(wordList.length).fill(false);

	let row = 1;
	const queue = [beginWord];
	let queueFirstIndex = 0;
	let newRowIndex = 1;
	while (queueFirstIndex < queue.length) {
		if (queueFirstIndex === newRowIndex) {
			row++;
			newRowIndex = queue.length;
		}

		const node = queue[queueFirstIndex];
		queueFirstIndex++;

		for (let i = 0; i < wordList.length; i++) {
			if (alreadyChecked[i]) {
				continue;
			}

			if (!checkDistanceIsOne(wordList[i], node)) {
				continue;
			}

			if (wordList[i] === endWord) {
				return row + 1;
			}

			queue.push(wordList[i]);
			alreadyChecked[i] = true;
		}
	}

	return 0;
}
