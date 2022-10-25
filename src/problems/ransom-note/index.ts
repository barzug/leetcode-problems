export default function canConstruct(ransomNote: string, magazine: string): boolean {
	const availableLetters = {};

	for (let i = 0; i < magazine.length; i++) {
		if (!availableLetters[magazine[i]]) {
			availableLetters[magazine[i]] = 0;
		}

		availableLetters[magazine[i]]++;
	}

	for (let i = 0; i < ransomNote.length; i++) {
		if (!availableLetters[ransomNote[i]]) {
			return false;
		}

		availableLetters[ransomNote[i]]--;
	}

	return true;
}
